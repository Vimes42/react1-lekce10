import { useState } from 'react';

export const ListItem = ({ item, ifSelected }) => {
const [selected, setSelected] = useState(false);

const toggleSelected = () => {
  const newSelected = !selected; 
  setSelected(newSelected);
  ifSelected(newSelected); 
};


  return (
    <div className={selected ? "panel panel--selected" : "panel"} onClick={toggleSelected} >
      {item ? item.name : "Načítá se"}
    </div>
  );
};
