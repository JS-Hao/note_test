import { ObservableMap, makeAutoObservable } from "mobx";
import { Note } from "./Note";

export class Store {
  private _map: ObservableMap<string, Note> = new ObservableMap();

  constructor(data: Note[] = []) {
    data.forEach((note) => {
      this._map.set(note.id, note);
    });
    makeAutoObservable(this);
  }

  get list() {
    const notes = Array.from(this._map.values());
    return notes
      .sort((it1, it2) => it1.updatedTime - it2.updatedTime)
      .map(({ id, title }) => {
        return { id, title };
      });
  }

  getNoteList(sortType: "updatedTime" | "createdTime") {
    const allList = Array.from(this._map.values());
    if (sortType === "createdTime") {
      return allList.sort((it1, it2) => it1.createdTime - it2.createdTime);
    } else {
      return allList.sort((it1, it2) => it1.updatedTime - it2.updatedTime);
    }
  }

  createNote() {
    const note = new Note();
    this._map.set(note.id, note);
  }

  deleteNote(id: string) {
    this._map.delete(id);
  }

  findNodte(id: string) {
    return this._map.get(id);
  }
}

const notes = new Array(50).fill(0).map(() => {
  const note = new Note();
  note.updateTitle = "标题标题标题标题标题标题标题标题标题标题标题标题标题标题";
  return note;
});

export const store = new Store(notes);
