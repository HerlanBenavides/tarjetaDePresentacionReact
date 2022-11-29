import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  
  const [isTrue, setisTrue] = useState(false);
  const handleBoolean = () => setisTrue(!isTrue);

  return (
    <div className="App">
      <img src="./src/assets/perrito1.jpg" alt="" />
      <button onClick={handleBoolean}>Visualizar Contenido</button>
      {
        isTrue ? <Counter /> : <h2>Esta Oculto</h2>
      }
    </div>
  )
}

export default App 
