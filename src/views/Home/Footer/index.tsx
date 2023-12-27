import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { application } from '../../../models';
import { CenterText, CreateButton, Container } from './styled';

export const Footer = observer(() => {
  const length = application.notes.length;

  const navigate = useNavigate();

  const handleClick = useCallback(async () => {
    const note = await application.addNote();
    navigate(`/note/${note.id}`);
  }, [navigate]);

  return (
    <Container>
      <CenterText>{`共${length}个笔记`}</CenterText>
      <CreateButton onTouchStart={handleClick} />
    </Container>
  );
});
