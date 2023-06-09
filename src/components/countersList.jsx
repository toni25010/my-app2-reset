import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id:0, value:0, name:"Ненужная вещь", price: "200"}, 
    {id:1, value:0, name:"Ложка"}, 
    {id:2, value:0, name:"Вилка"},
    {id:3, value:0, name:"Тарелка"},
    {id:4, value:0, name:"Набор минималиста"},
  ];
  
  const [counters, setCounters] = useState(initialState);
  
  const handleDelete = (id) => {
    console.log("handleDelete: ", id);
    const newCounters = counters.filter(c => c.id !== id);
    setCounters(newCounters);
  };
  
  const handleReset = () => {
    setCounters(initialState);
    console.log('handle reset');
  };
  
  const handleIncrement = (id) => {
    const updatedCounters = counters.map(c => {
      if (c.id === id) {
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };
  const handleDecrement = (id) => {
    const updatedCounters = counters.map(c => {
      if (c.id === id) {
        return { ...c, value: c.value - 1 };
      }
      return c;
    });
    setCounters(updatedCounters);
  };  

  
  return (
    <>
      {counters.map((count) => (
        <Counter 
          key={count.id} 
          onIncrement={() => handleIncrement(count.id)}
          onDecrement={() => handleDecrement(count.id)}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button 
        className="btn btn-primary btn-sm m-2" 
        onClick={handleReset}
      >
        Сброс
      </button> 
    </>  
  );
};

export default CountersList;
