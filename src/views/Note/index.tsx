import { useLoaderData, LoaderFunction, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { application } from '../../models';
import { formatDate } from '../../common';
import { Container, TitleEditor, ContentEditor, Header, BackToHome, Content, Date } from './styled';

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
        <BackToHome onClick={handleBack} />
      </Header>
      <Content>
        <Date>{formatDate(note.updatedTime)}</Date>
        <TitleEditor initialValue={note.title} onChange={note?.updateTitle} />
        <ContentEditor
          initialValue={note.content}
          onChange={note?.updateContent}
          placeholder="请输入内容"
        />
      </Content>
    </Container>
  );
});
