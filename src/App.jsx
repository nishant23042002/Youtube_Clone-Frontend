import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { useState } from 'react'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev)
  return (
    <div>
      <Header openModal={toggleModal} isOpen={isOpen} />
      <Slider />


      <main className="py-4 h-auto overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
