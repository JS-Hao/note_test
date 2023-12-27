import { useCallback, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import { Note, application } from '../../../models';
import { getDateRange } from '../../../common';
import { Container, GroupContainer, ListItem, DeleteIcon } from './styled';

export const NotesFlow = observer(() => {
  const { notes } = application;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const willBeDeleteId = useRef<string | null>(null);

  const groups = useMemo(() => {
    const res: Array<{ date?: string; list: Note[] }> = [];
    notes.forEach((item) => {
      const date = getDateRange(item.updatedTime);
      const lastItem = res[res.length - 1];
      if (lastItem && lastItem.date === date) {
        lastItem.list.push(item);
      } else {
        res.push({ date, list: [item] });
      }
    });
    return res;
  }, [notes]);

  const showModal = useCallback((id: string) => {
    setIsModalOpen(true);
    willBeDeleteId.current = id;
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    willBeDeleteId.current = null;
  }, []);

  const handleDelete = useCallback(() => {
    if (willBeDeleteId.current) {
      application.deleteNote(willBeDeleteId.current);
    }
    closeModal();
  }, [closeModal]);

  return (
    <Container>
      {groups.map((group, index) => (
        <Group key={index} {...group} onDelete={showModal} />
      ))}
      <Modal open={isModalOpen} onCancel={closeModal} onOk={handleDelete} okText="确认" cancelText="取消">
        {'确定要删除?'}
      </Modal>
    </Container>
  );
});

const Group = ({
  date,
  list,
  onDelete,
}: {
  date?: string;
  list: Note[];
  onDelete: (id: string) => void;
}) => {
  const handleDelete = useCallback(
    (id: string) => {
      onDelete(id);
    },
    [onDelete],
  );

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
              <DeleteIcon onTouchStart={() => handleDelete(it.id)} />
            </ListItem>
          );
        })}
      </div>
    </GroupContainer>
  );
};
