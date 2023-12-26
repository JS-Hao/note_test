import { useLoaderData, LoaderFunction } from "react-router-dom";
import { store } from "../../models";
import { ErrorPage } from "../ErrorPage";
import { useCallback, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Descendant, createEditor } from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = observer(() => {
  const { noteId } = useLoaderData() as { noteId: string };
  const note = useMemo(() => store.findNote(noteId), [noteId]);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const handleValueChange = useCallback(
    (curValue: Descendant[]) => {
      note?.updateContent(curValue);
    },
    [note]
  );

  if (!note) return <ErrorPage />;
  return (
    <Slate
      editor={editor}
      initialValue={note.content}
      onValueChange={handleValueChange}
    >
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
});

const renderElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
