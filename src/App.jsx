import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { useState } from 'react'


function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => setIsOpen((prev) => !prev)
  return (
    <div>
      <Header openModal={toggleModal} />
      <Slider />


      <main className="p-4 border">
        <Outlet context={{ isOpen }} />
      </main>
    </div>
  )
}

export default App
