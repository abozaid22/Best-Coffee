
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className='container gap-6 mx-auto md:px-0 px-3 py-8 '>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h2 className='text-xl font-bold mb-4 text-orange-400'>About Us</h2>
            <p className='text-sm text-gray-300 '>We are committed to delivering high-quality solutions and services to meet your needs. Our mission is to empower your digital presence.</p>
          </div>

          <div>
            <h2 className='text-xl font-bold mb-4 text-orange-400'>Quick Links</h2>
            <ul className='text-sm text-gray-300 space-y-1'>
              <li className='hover:text-blue-400 cursor-pointer w-fit transition duration-200'>Home</li>
              <li className='hover:text-blue-400 cursor-pointer w-fit transition duration-200'>About</li>
              <li className='hover:text-blue-400 cursor-pointer w-fit transition duration-200'>Services</li>
              <li className='hover:text-blue-400 cursor-pointer w-fit transition duration-200'>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className='text-xl font-bold mb-4 text-orange-400'>Contact Us</h2>
            <ul className=' space-y-2 text-sm'>
              <li className='flex items-center gap-2'>
                <FaLocationDot className='text-orange-400' />
                <p className='text-sm text-gray-300 '>123 Street Name, City, Country</p>
              </li>
              <li className='flex items-center gap-2'>
                <FaPhoneAlt className='text-orange-400' />
                <p className='text-sm text-gray-300 '>+123 456 7890</p>
              </li>
              <li className='flex items-center gap-2'>
                <MdEmail className='text-orange-400' />
                <p className='text-sm text-gray-300 '>support@example.com</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media */}
        <div className='py-10 gap-4 grid grid-cols-1 md:grid-cols-2 space-x-4 text-sm text-gray-300 '>

          <div className='flex items-center gap-4 md:ms-0 mx-auto'>
            <Link className='p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-300' to={'https://facebook.com' } target={'_blank' } title='facebook'>
              <FaFacebookF className='text-white ' />
            </Link>
            <Link className='p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-300' to={'https://twitter.com' } target={'_blank' } title='twitter'>          
              <FaTwitter className='text-white' />
            </Link>
            <Link className='p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-300' to={'https://instagram.com' } target={'_blank' } title='instagram'>
              <FaInstagram className='text-white' />
            </Link>
            <Link className='p-2 rounded-full bg-orange-800 hover:bg-orange-400 transition duration-300' to={'https://linkedin.com' } target={'_blank' } title='linkedin'>
              <FaLinkedinIn className='text-white' />
            </Link>
          </div>

          <p className='text-sm md:me-0 mx-auto'>© 2023 Your Company. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}
