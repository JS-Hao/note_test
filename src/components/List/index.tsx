import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Container, ListItem } from "./styled";
import { Store } from "../../models";

interface ListProps {
  list: Store["list"];
}

export const List = observer((props: ListProps) => {
  const { list } = props;
  return (
    <Container>
      {list.map((it) => {
        return (
          <ListItem key={it.id}>
            <Link to={`/note/${it.id}`}>
              <div className="title">{it.title}</div>
              <div className="updated-time">{it.updatedTime}</div>
            </Link>
          </ListItem>
        );
      })}
    </Container>
  );
});
