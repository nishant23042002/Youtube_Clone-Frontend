import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SliderProvider } from './context/sliderContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Body } from './components/Body.jsx';
import { SignIn } from './components/SignIn.jsx';
import { Videos } from './components/Videos.jsx';
import { VideoDetails } from './components/VideoDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "signin", element: <SignIn /> },
      { path: "videos", element: <Videos /> },
      { path: "video/:id", element: <VideoDetails /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SliderProvider>
      <RouterProvider router={router}></RouterProvider>
    </SliderProvider>
  </StrictMode>,
)
