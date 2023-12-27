import Dexie, { Table } from 'dexie';
import { NoteData } from '../models';

class CustomDexie extends Dexie {
  notes!: Table<NoteData>;

  constructor() {
    super('notes-local');
    this.version(2).stores({
      notes: '++id, title, createdTime, updatedTime, content',
    });
  }
}

export class Local {
  private _db: CustomDexie = new CustomDexie();

  async addItem(note: NoteData) {
    return this._db.notes.add(note);
  }

  async updateItem(note: NoteData) {
    return this._db.notes.update(note.id, note);
  }

  async deleteItem(id: string) {
    return this._db.notes.delete(id);
  }

  async getItems() {
    return await this._db.notes.toArray();
  }
}
