import { store } from "../../models";
import { List } from "../List";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <>
      <List list={store.list} />
      <Footer />
    </>
  );
};
