import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from './Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import Friends from './pages/Friends.jsx'
import Timeline from './pages/Timeline.jsx'
import Analytics from './pages/Analytics.jsx'
import Notfound from './components/Notfound.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          Component: Homepage
        },
        {
          path: "/friends",
          Component: Friends
        },
        {
          path: "/timeline",
          Component: Timeline
        },
        {
          path: "/analytics",
          Component: Analytics
        }
      ],
      errorElement: <Notfound></Notfound>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
