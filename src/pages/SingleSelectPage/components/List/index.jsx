import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [energyValue, setEnergyValue] = useState(0);
  const [energyUnit, setEnergyUnit] = useState('kcal');
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={setSelectedId}
          onEnergyValue={setEnergyValue}
          onEnergyUnit={setEnergyUnit}
        />
      ))}
      <div>
      Energetická hodnota: {energyValue} {energyUnit}
      </div>
    </div>
  );
};
