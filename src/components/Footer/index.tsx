import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { CenterText, CreateButton, Container } from "./styled";
import { application } from "../../models";

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
      <CreateButton type="primary" onClick={handleClick}>
        新建
      </CreateButton>
    </Container>
  );
});
