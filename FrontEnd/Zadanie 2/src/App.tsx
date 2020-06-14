import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const[number,setNumber]=React.useState(0);
  return (
    <div>
      <button onClick={()=>setNumber(number-1)}>-</button>
      {(number)}
      <button onClick={()=>setNumber(number+1)}>+</button>
      {(number>9 ||number<-9) && <h1>("Starczy towarzyszu za dużo klikasz")</h1>}
    </div>
  );
}

export default App;
