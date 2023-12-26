import { useLoaderData, LoaderFunction } from "react-router-dom";
import { application } from "../../models";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Editor } from "../Editor";

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = observer(() => {
  const { noteId } = useLoaderData() as { noteId: string };
  const note = application.findNote(noteId);

  const handleChange = useCallback(
    (curValue: string) => {
      note?.updateContent(curValue);
    },
    [note]
  );

  if (!note) return <></>;
  return <Editor initialValue={note.content} onChange={handleChange} />;
});
