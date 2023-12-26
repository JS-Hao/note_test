import Dexie, { Table } from "dexie";
import { Note } from "../models";

interface Item {
  id: string;
  title: string;
  createdTime: number;
  updatedTime: number;
  content: string;
}

class CustomDexie extends Dexie {
  notes!: Table<Item>;

  constructor() {
    super("notes-local");
    this.version(2).stores({
      notes: "++id, title, createdTime, updatedTime, content",
    });
  }
}

class Local {
  private _db: CustomDexie = new CustomDexie();

  async addNote(note: Note) {
    const item: Item = {
      id: note.id,
      title: note.title,
      createdTime: note.createdTime,
      updatedTime: note.updatedTime,
      content: JSON.stringify(note.content),
    };
    return this._db.notes.add(item);
  }

  async updateNote(note: Note) {
    const item: Item = {
      id: note.id,
      title: note.title,
      createdTime: note.createdTime,
      updatedTime: note.updatedTime,
      content: JSON.stringify(note.content),
    };
    return this._db.notes.update(item.id, item);
  }

  async deleteNote(id: string) {
    return this._db.notes.delete(id);
  }

  async getNotes(): Promise<Note[]> {
    return (await this._db.notes.toArray()).map((it) => ({
      ...it,
      content: JSON.parse(it.content),
    })) as Note[];
  }
}

export const local = new Local();
