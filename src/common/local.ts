import Dexie, { Table } from "dexie";
import { NoteData } from "../models";

type Item = Pick<NoteData, "id" | "title" | "createdTime" | "updatedTime"> & {
  content: string;
};

class CustomDexie extends Dexie {
  notes!: Table<Item>;

  constructor() {
    super("notes-local");
    this.version(2).stores({
      notes: "++id, title, createdTime, updatedTime, content",
    });
  }
}

export class Local {
  private _db: CustomDexie = new CustomDexie();

  async addItem(note: NoteData) {
    const item: Item = {
      id: note.id,
      title: note.title,
      createdTime: note.createdTime,
      updatedTime: note.updatedTime,
      content: JSON.stringify(note.content),
    };
    return this._db.notes.add(item);
  }

  async updateItem(note: NoteData) {
    const item: Item = {
      id: note.id,
      title: note.title,
      createdTime: note.createdTime,
      updatedTime: note.updatedTime,
      content: JSON.stringify(note.content),
    };
    return this._db.notes.update(item.id, item);
  }

  async deleteItem(id: string) {
    return this._db.notes.delete(id);
  }

  async getItems() {
    return (await this._db.notes.toArray()).map((it) => ({
      ...it,
      content: JSON.parse(it.content),
    })) as NoteData[];
  }
}
