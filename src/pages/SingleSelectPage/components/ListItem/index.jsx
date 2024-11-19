export const ListItem = ({ item, selected, onSelect, onEnergyValue, onEnergyUnit }) => {
  
  
  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={() => {
        onSelect(item.id)
        onEnergyValue(Number(item.nutrients.energy.value))
        onEnergyUnit(item.nutrients.energy.unit)
      }}
    >
      {item.name}
      

    </div>
  );
};
