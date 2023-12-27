import { application } from '../../models';
import { List } from '../List';
import { Footer } from './Footer';
import { observer } from 'mobx-react-lite';

export const Home = observer(() => {
  const { ready, notes } = application;
  if (!ready) return <></>;
  return (
    <>
      <List data={notes} />
      <Footer />
    </>
  );
});
