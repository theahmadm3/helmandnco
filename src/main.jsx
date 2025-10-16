import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
// import TeamMember from './pages/TeamMember.jsx'
// import Error404 from './pages/Error404.jsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      }
      // {
      //   path: 'teamMember/:id',
      //   element: <TeamMember />
      // },
    ]
  },
  // {
  //   path: '*',
  //   element: <Error404 />
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
