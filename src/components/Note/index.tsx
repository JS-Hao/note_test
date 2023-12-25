import { useLoaderData, LoaderFunction } from "react-router-dom";
import { store } from "../../models";
import { ErrorPage } from "../ErrorPage";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = observer(() => {
  const { noteId } = useLoaderData() as { noteId: string };
  const note = useMemo(() => store.findNote(noteId), [noteId]);
  if (!note) return <ErrorPage />;
  return <div>{note.title}</div>;
});
