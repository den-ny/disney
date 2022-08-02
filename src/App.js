import './App.css';
import Navbar from './components/Navbar'
import Accordion from "./components/Accordion"
import { useState } from 'react';
function App() {
  const [i, setChar] = useState(0)
  const [pg, setPage] = useState(2)

  return (
    <div className="App">
      <Navbar />
      <div className="accordion-container">
        <Accordion min={i} max={i + 10} page={pg} />
        <Accordion min={i + 10} max={i + 20} page={pg} />
        <Accordion min={i + 20} max={i + 30} page={pg} />
        <Accordion min={i + 30} max={i + 40} page={pg} />
        <Accordion min={i + 40} max={i + 50} page={pg} />
      </div>
    </div>
  );
}

export default App;
