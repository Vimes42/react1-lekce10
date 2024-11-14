import { useState, useEffect } from 'react';

export const Detail = ({ itemId }) => {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:4000/api/items/${itemId}`);
      const json = await response.json();
      setItem(json.data);
    }
  
    if (itemId !== null) {
      fetchItem();
    }
  }, [itemId]);

  if (itemId === null || item === null) {
    return null;
  }
  
  return (
    <div className="box">
      {item.description}
    </div>
  );
};
