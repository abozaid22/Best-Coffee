
import { NavLink } from 'react-router-dom'
import imgCoffe from '../../assets/hot-beverages-Bxy0D0Ox.png'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-[#3F181C]'>
        <div className="container lg:px-28 py-5 px-2 mx-auto flex justify-between items-center">
            {/* 💻 desktop 💻 */}
            <div className='flex'>
                <img className='w-10 me-2' src={imgCoffe} alt="imgCoffe" />
                <h1 class="text-3xl font-bold"> Coffe</h1>
            </div>
            <div >
                <ul className=' gap-7 hidden md:flex '>
                    <li className='p-1 rounded hover:bg-amber-900 transition duration-400'><NavLink to="/">Home</NavLink></li>
                    <li className='p-1 rounded hover:bg-amber-900 transition duration-400'><NavLink to="">About</NavLink></li>
                    <li className='p-1 rounded hover:bg-amber-900 transition duration-400'><NavLink to="">Contact</NavLink></li>
                    <li className='p-1 rounded hover:bg-amber-900 transition duration-400'><NavLink to="">Support</NavLink></li>
                    <li className='p-1 rounded hover:bg-amber-900 transition duration-400'><NavLink to="">Pricing</NavLink></li>
                </ul>
            </div>
            <div>
                <button className='md:block hidden py-1 px-3 border border-white rounded cursor-pointer hover:border-orange-400 hover:text-orange-400 transition duration-400'>Get Started</button>
            </div>

            {/* 📱 Mobile 📱*/}
            <button className='md:hidden cursor-pointer text-2xl me-1'
                onClick={() => setOpen(true)}><FaBars />
            </button>

            {/* side bar */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-60 bg-[#3F181C] z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
               <button onClick={()=> setOpen(false)} className='text-3xl cursor-pointer m-1 mt-4' ><IoMdClose /></button>
                
                <ul className="space-y-6 ps-2">
                    <li className='p-1 mx-2 rounded hover:bg-amber-900 transition duration-400'><NavLink onClick={()=>setOpen(false)} to="/">Home</NavLink></li>
                    <li className='p-1 mx-2 rounded hover:bg-amber-900 transition duration-400'><NavLink onClick={()=>setOpen(false)} to="">About</NavLink></li>
                    <li className='p-1 mx-2 rounded hover:bg-amber-900 transition duration-400'><NavLink onClick={()=>setOpen(false)} to="">Contact</NavLink></li>
                    <li className='p-1 mx-2 rounded hover:bg-amber-900 transition duration-400'><NavLink onClick={()=>setOpen(false)} to="">Support</NavLink></li>
                    <li className='p-1 mx-2 rounded hover:bg-amber-900 transition duration-400'><NavLink onClick={()=>setOpen(false)} to="">Pricing</NavLink></li>
                </ul>

                <button onClick={()=>setOpen(false)} className='mt-5 py-2 px-5 ms-4 cursor-pointer border border-white rounded hover:border-orange-400 hover:text-orange-400 transition duration-400'>Get Started</button>
            </div>
            
        </div>
      </nav>
    </>
  )
}
