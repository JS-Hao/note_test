import { ObservableMap, makeAutoObservable } from 'mobx';
import { Cache } from './Cache';
import { Note } from './Note';

export class Application {
  public cache = new Cache();

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
    const note = new Note(this.cache, {
      title: `未命名笔记${this.notes.length + 1}`,
    });
    this._noteMap.set(note.id, note);
    await this.cache.addItem(note.toJSON());
    return note;
  }

  async deleteNote(id: string) {
    this._noteMap.delete(id);
    await this.cache.deleteItem(id);
  }

  findNote(id: string) {
    return this._noteMap.get(id);
  }

  private async _init() {
    const items = await this.cache.getItems();
    items.forEach((item) => {
      const note = new Note(this.cache, item);
      this._noteMap.set(note.id, note);
    });
    this._ready = true;
  }
}

export const application = new Application();
