import { Descendant } from "slate";

export interface NoteData {
  id: string;
  title: string;
  content: Descendant[];
  createdTime: number;
  updatedTime: number;
}
