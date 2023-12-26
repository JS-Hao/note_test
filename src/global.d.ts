import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

type CustomElementType =
  | "paragraph"
  | "block-quote"
  | "bulleted-list"
  | "heading-one"
  | "heading-two"
  | "list-item"
  | "numbered-list";
type CustomElementAlign = "left" | "center" | "right" | "justify";

type CustomElement = {
  type: CustomElementType;
  children: CustomText[];
  align?: CustomElementAlign;
};
type CustomText = {
  text: string;
  bold?: true;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
