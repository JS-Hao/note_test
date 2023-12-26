import { makeAutoObservable, observable } from "mobx";
import { generate } from "shortid";
import { Descendant } from "slate";
import { Local } from "../common";
import { NoteData } from "./NoteData";

export class Note {
  id: string;
  title: string;
  content: Descendant[];
  createdTime: number;
  updatedTime: number;
  local: Local;

  constructor(local: Local, data: Partial<NoteData> = {}) {
    this.id = data.id || generate();
    this.title = data.title || "";
    this.content = data.content || [
      { type: "paragraph", children: [{ text: "" }] },
    ];
    this.createdTime = data.createdTime || Date.now();
    this.updatedTime = data.updatedTime || Date.now();
    this.local = local;

    makeAutoObservable(this, {
      content: observable.ref,
    });
  }

  updateTitle(title: string) {
    this.title = title;
    this.updatedTime = Date.now();
    this.local.updateItem(this);
  }

  updateContent(content: Descendant[]) {
    this.content = content;
    this.updatedTime = Date.now();
    this.local.updateItem(this);
  }
}
