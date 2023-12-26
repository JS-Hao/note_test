import { makeAutoObservable, observable } from "mobx";
import { generate } from "shortid";
import { Descendant } from "slate";

export class Note {
  private _title: string = "";
  _content: Descendant[] = [];
  private _createdTime: number = Date.now();
  private _updatedTime: number = Date.now();
  private _id = generate();

  constructor() {
    makeAutoObservable(this, {
      _content: observable.ref,
    });
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get content() {
    return this._content;
  }

  get createdTime() {
    return this._createdTime;
  }

  get updatedTime() {
    return this._updatedTime;
  }

  updateTitle(title: string) {
    this._title = title;
  }

  updateContent(content: Descendant[]) {
    this._content = content;
    this._updatedTime = Date.now();
  }
}
