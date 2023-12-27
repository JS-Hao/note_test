import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Note } from '../../../models';
import { getDate } from '../../../common';
import { Container, GroupContainer, ListItem } from './styled';

export const NotesFlow = observer((props: { data: Note[] }) => {
  const { data } = props;
  const groups = useMemo(() => {
    const res: Array<{ date?: string; list: Note[] }> = [];
    data.forEach((item) => {
      const date = getDate(item.updatedTime);
      const lastItem = res[res.length - 1];
      if (lastItem && lastItem.date === date) {
        lastItem.list.push(item);
      } else {
        res.push({ date, list: [item] });
      }
    });
    return res;
  }, [data]);

  return (
    <Container>
      {groups.map((group, index) => (
        <Group key={index} {...group} />
      ))}
    </Container>
  );
});

const Group = ({ date, list }: { date?: string; list: Note[] }) => {
  return (
    <GroupContainer>
      <div className="date">{date}</div>
      <div className="list-wrapper">
        {list.map((it) => {
          return (
            <ListItem key={it.id} className="list-item">
              <Link to={`/note/${it.id}`}>
                <div className="title">{it.title}</div>
              </Link>
            </ListItem>
          );
        })}
      </div>
    </GroupContainer>
  );
};
