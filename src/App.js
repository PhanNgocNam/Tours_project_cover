import './App.css';
import { tours_context } from './Contexts/Tours_context';
import { useContext } from 'react';

function App() {
  const tours = useContext(tours_context)
  console.log(tours );

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
