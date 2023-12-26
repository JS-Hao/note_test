import { ObservableMap, makeAutoObservable } from "mobx";
import { Local } from "../common";
import { Note } from "./Note";

export class Application {
  public local = new Local();

  private _ready: boolean = false;
  private _noteMap: ObservableMap<string, Note> = new ObservableMap();

  constructor() {
    makeAutoObservable(this);
    this._init();
  }

  get ready() {
    return this._ready;
  }

  get notes() {
    return Array.from(this._noteMap.values()).sort(
      (it1, it2) => it2.updatedTime - it1.updatedTime
    );
  }

  async addNote() {
    const note = new Note(this.local);
    this._noteMap.set(note.id, note);
    await this.local.addItem(note.toJSON());
    return note;
  }

  async deleteNote(id: string) {
    this._noteMap.delete(id);
    await this.local.deleteItem(id);
  }

  findNote(id: string) {
    return this._noteMap.get(id);
  }

  private async _init() {
    const items = await this.local.getItems();
    items.forEach((item) => {
      const note = new Note(this.local, item);
      this._noteMap.set(note.id, note);
    });
    this._ready = true;
  }
}

export const application = new Application();
