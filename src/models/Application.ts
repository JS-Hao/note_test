import { ObservableMap, makeAutoObservable } from 'mobx';
import { generate } from 'shortid';
import { Local } from './Local';
import { Note } from './Note';

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
    return Array.from(this._noteMap.values()).sort((it1, it2) => it2.updatedTime - it1.updatedTime);
  }

  async addNote() {
    const note = new Note(this.local, {
      title: `未命名笔记${this.notes.length + 1}`,
    });
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
      const note2 = new Note(this.local, { ...item, updatedTime: Date.now() - 3600 * 24 * 1000 });
      const note3 = new Note(this.local, { ...item, updatedTime: Date.now() - 6 * 3600 * 24 * 1000 });

      note2.id = generate();
      note3.id = generate();

      this._noteMap.set(note.id, note);
      this._noteMap.set(note2.id, note2);
      this._noteMap.set(note3.id, note3);
    });
    this._ready = true;
  }
}

export const application = new Application();
