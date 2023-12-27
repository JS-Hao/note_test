import { observer } from 'mobx-react-lite';
import { application } from '../../models';
import { NotesFlow } from './NotesFlow';
import { Footer } from './Footer';
import { Empty } from './Empty';

export const Home = observer(() => {
  const { ready, notes } = application;
  const isEmpty = notes.length === 0;
  if (!ready) return <></>;
  return (
    <>
      {isEmpty ? <Empty /> : <NotesFlow />}
      <Footer />
    </>
  );
});
