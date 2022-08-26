import { useState } from 'react'

import './App.css'
import About from './Components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <About/>
       
    </div>
  )
}

export default App
