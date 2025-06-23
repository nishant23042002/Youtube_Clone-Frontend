import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Slider } from './components/Slider'


function App() {

  return (
    <div>
      <Header />
      <Slider />


      <main className="p-4 border">
        <Outlet />
      </main>
    </div>
  )
}

export default App
