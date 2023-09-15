import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
// import { lazy } from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'

import NotFound from './Components/NotFound'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

// const Home = lazy(() => import('./Components/Home/Home'))
// const About = lazy(() => import('./Components/About/About'))
// const Portfolio = lazy(() => import('./Components/Portfolio/Portfolio'))


export default function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'about', element: <About></About> },
        {path:'portfolio',element:<Portfolio></Portfolio>},
        {path:'contact',element:<Contact></Contact>},
        { path: '*', element: <NotFound></NotFound> }
      ]
    }
  ])

  

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>



    </>
  )
}

