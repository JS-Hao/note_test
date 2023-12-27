import { useLoaderData, LoaderFunction, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';
import { useCallback } from 'react';
import { application } from '../../models';
import { Container, TitleEditor, ContentEditor, Header } from './styled';

export const NoteLoader: LoaderFunction = ({ params }: any) => {
  return params;
};

export const Note = observer(() => {
  const { noteId } = useLoaderData() as { noteId: string };
  const note = application.findNote(noteId);
  const navigate = useNavigate();
  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  if (!note) return <></>;
  return (
    <Container>
      <Header>
        <Button onClick={handleBack}>{'返回'}</Button>
      </Header>
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
