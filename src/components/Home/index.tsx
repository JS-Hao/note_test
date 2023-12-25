import { store } from "../../models";
import { List } from "../List";

export const Home = () => {
  return <List list={store.list} />;
};
