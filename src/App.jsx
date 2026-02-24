import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home';
import OurMenu from './Components/OurMenu/OurMenu';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const routes = createBrowserRouter([
    {path:'/' , element:<Layout /> , children:[
      {index: true, element:<Home />},
      // {path:'OurMenu', element:<OurMenu />},

      {path:'*',element:<NotFound />},
    ]},
  ])

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
