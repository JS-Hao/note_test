import { ObservableMap, makeAutoObservable } from "mobx";
import { Note } from "./Note";
import { Descendant } from "slate";
import {} from "../";

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
      .sort((it1, it2) => it2.updatedTime - it1.updatedTime)
      .map(({ id, title, updatedTime }) => {
        return { id, title, updatedTime };
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
    return note;
  }

  deleteNote(id: string) {
    this._map.delete(id);
  }

  findNote(id: string) {
    return this._map.get(id);
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: "bold", bold: true },
      {
        text: ", or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    align: "center",
    children: [{ text: "Try it out for yourself!" }],
  },
];

const notes = new Array(50).fill(0).map(() => {
  const note = new Note();
  note.updateTitle("标题标题标题标题标题标题标题标题标题标题标题标题标题标题");
  note.updateContent(initialValue);
  return note;
});

export const store = new Store(notes);

// @ts-ignore
window.store = store;
