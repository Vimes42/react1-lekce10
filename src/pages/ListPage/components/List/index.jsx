import { useEffect, useState } from 'react';

import { ListItem } from '../ListItem/index';
import Dropdown from 'react-bootstrap/Dropdown';



export const List = () => {
  const [items, setItems] = useState(null);
  const [counter, setCounter] = useState(0);
  const [dropdown, setDropdown] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, []);


  const onSelect = (isSelected) => {
    setCounter(isSelected ? (counter + 1) : (counter - 1))
  }
  
  if (items === null) {
    return <p>Loading...</p>;
  } 

  return (
    <>
    <div className="dropdown">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filtr
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setDropdown(1)}>vláknina: více než 2 g na 100 g</Dropdown.Item>
        <Dropdown.Item onClick={() => setDropdown(2)}>bílkoviny: více než 1,5 g na 100 g</Dropdown.Item>
        <Dropdown.Item onClick={() => setDropdown(3)}>tuky: méně než 1,3 g na 100 g</Dropdown.Item>
        <Dropdown.Item onClick={() => setDropdown(0)}>reset</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      {dropdown === 0 ? (
          <div className="list">
             {items.map((item) => (
                <ListItem key={item.id} item={item} ifSelected={onSelect}/>
        ))}
          </div>
      ) : dropdown === 1 ? (
        <div className="list">
             {items
             .filter((item) => item.nutrients.fiber.value >= 2)
             .map((item) => <ListItem key={item.id} item={item} ifSelected={onSelect}/>)
             }
          </div>
      ) : dropdown === 2 ? (
        <div className="list">
             {items
             .filter((item) => item.nutrients.proteins.value >= 1.5)
             .map((item) => <ListItem key={item.id} item={item} ifSelected={onSelect}/>)
             }
          </div>
      ) : dropdown === 3 ? (
        <div className="list">
             {items
             .filter((item) => item.nutrients.fats.value <= 1.3)
             .map((item) => <ListItem key={item.id} item={item} ifSelected={onSelect}/>)
             }
          </div>
          ) : null}
    
  <p>Počet vybraných položek: {counter} </p>
    </>
  );
};
