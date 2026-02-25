
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollTopButton from '../Components/ScrollTopButton/ScrollTopButton'

export default function Layout() {
  return (
    <>
     <Navbar />
        <Outlet />
      <ScrollTopButton />
     <Footer /> 
    </>
  )
}
