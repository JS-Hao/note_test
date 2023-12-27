import { observer } from 'mobx-react-lite';
import { application } from '../../models';
import { NotesFlow } from './NotesFlow';
import { Footer } from './Footer';

export const Home = observer(() => {
  const { ready, notes } = application;
  if (!ready) return <></>;
  return (
    <>
      <NotesFlow data={notes} />
      <Footer />
    </>
  );
});
