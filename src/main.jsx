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
import { ProtectedRoute } from "./components/ProtectRoute.jsx"
import { HandleError } from "./components/HandleError.jsx"
import { ChannelInfo } from './components/ChannelInfo.jsx';
import { Provider } from "react-redux";
import { store } from "./services/store.js";
import { CreateChannelForm } from './components/CreateChannel.jsx';
import { ModalProvider } from "./context/modalContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <HandleError />,
    children: [
      { path: "/", element: <Body /> },
      { path: "signin", element: <SignIn /> },
      {
        path: "videos", element: (
          <ProtectedRoute>
            <Videos />
          </ProtectedRoute>)
      },
      {
        path: "video/:id", element: (
          <ProtectedRoute>
            <VideoDetails />
          </ProtectedRoute>)
      },
      { path: "createchannel", element: <CreateChannelForm /> },
      { path: "channelinfo/:id", element: <ChannelInfo /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SliderProvider>
        <ModalProvider>
          <RouterProvider router={router}></RouterProvider>
        </ModalProvider>
      </SliderProvider>
    </Provider>
  </StrictMode>,
)
