import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [counter, setCounter] = useState(0);

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
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} ifSelected={onSelect}/>
      ))}
      <p>Počet vybraných položek: {counter} </p>
    </div>
  );
};
