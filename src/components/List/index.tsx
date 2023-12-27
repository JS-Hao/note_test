import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, ListItem } from "./styled";
import { Note } from "../../models";
import { getDateText } from "../../common";

interface ListProps {
  data: Note[];
}

export const List = observer((props: ListProps) => {
  const { data } = props;
  return (
    <Container>
      {data.map((it) => {
        return (
          <ListItem key={it.id}>
            <Link to={`/note/${it.id}`}>
              <div className="title">{it.title}</div>
              <div className="updated-time">{getDateText(it.updatedTime)}</div>
            </Link>
          </ListItem>
        );
      })}
    </Container>
  );
});
