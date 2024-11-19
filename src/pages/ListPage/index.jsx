import { List } from './components/List';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ListPage = () => {
  return (
    <div className="container">
      <h1>Zobrazení seznamu</h1>
      <List />
    </div>
  );
};
