import { makeAutoObservable } from "mobx";
import { generate } from "shortid";

export class Note {
  private _title: string = "";
  private _content: string = "";
  private _createdTime: number = Date.now();
  private _updatedTime: number = Date.now();
  private _id = generate();

  constructor() {
    makeAutoObservable(this);
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set updateTitle(title: string) {
    this._title = title;
  }

  get content() {
    return this._content;
  }

  set updateContent(content: string) {
    this._content = content;
    this._updatedTime = Date.now();
  }

  get createdTime() {
    return this._createdTime;
  }

  get updatedTime() {
    return this._updatedTime;
  }
}
