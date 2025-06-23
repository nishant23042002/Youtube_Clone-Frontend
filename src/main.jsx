import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SliderProvider } from './context/sliderContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SliderProvider>
      <App />
    </SliderProvider>
  </StrictMode>,
)
