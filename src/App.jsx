import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Slider } from './components/Slider'



function App() {



  return (
    <div>
      <Header />
      <Slider />

      <Outlet />

    </div>
  )
}

export default App
