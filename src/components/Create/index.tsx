import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { store } from "../../models";
import { useCallback } from "react";

export const Create = observer(() => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    const note = store.createNote();
    navigate(`/note/${note.id}`);
  }, [navigate]);
  return (
    <Button type="primary" onClick={handleClick}>
      新建
    </Button>
  );
});
