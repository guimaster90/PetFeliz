import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <dive className = "App">
      <NavBar/>
      <div className="container">
      <Outlet/>
      </div>
    </dive>
  )
}

export default App
