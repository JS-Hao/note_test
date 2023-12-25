import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Container, CenterText, CreateButton } from "./styled";
import { store } from "../../models";

export const Footer = observer(() => {
  const length = store.list.length;

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    const note = store.createNote();
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
