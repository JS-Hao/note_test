import { useLoaderData, LoaderFunction } from "react-router-dom";

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = () => {
  const data = useLoaderData() as { noteId: string };

  return <div>{data.noteId}</div>;
};
