import { useLoaderData, LoaderFunction, useNavigate } from "react-router-dom";
import { application } from "../../models";
import { observer } from "mobx-react-lite";
import { Container, TitleEditor, ContentEditor } from "./styled";
import { Button } from "antd";
import { useCallback } from "react";
import { Header } from "../Header";

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = observer(() => {
  const { noteId } = useLoaderData() as { noteId: string };
  const note = application.findNote(noteId);
  const navigate = useNavigate();
  const handleBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  if (!note) return <></>;
  return (
    <Container>
      <Header left={<Button onClick={handleBack}>{"返回"}</Button>} />
      <TitleEditor initialValue={note.title} onChange={note?.updateTitle} />
      <ContentEditor
        initialValue={note.content}
        onChange={note?.updateContent}
        placeholder="请输入内容"
        autoFocus
      />
    </Container>
  );
});
