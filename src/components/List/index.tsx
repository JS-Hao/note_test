import { observer } from "mobx-react-lite";
import { Container } from "./styled";
import { Store } from "../../models";

interface ListProps {
  list: Store["list"];
}

export const List = observer((props: ListProps) => {
  const { list } = props;
  return (
    <Container>
      {list.map((it) => {
        return <div key={it.id}>{it.title}</div>;
      })}
    </Container>
  );
});
