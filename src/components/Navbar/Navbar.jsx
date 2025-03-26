import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavbarMenu } from '../../mockData/data'
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from 'framer-motion'

const Navbar = () => {

  const[open, setOpen] = React.useState(false)
  const[openDropdown, setOpenDropdown] = useState(null)
  return (
    <>
    <nav>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className="container flex justify-between items-center py-8">
        {/* logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <FaDumbbell/>
          <p>Aura</p>
          <p className='text-secondary'>Horizon</p>
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
        <ul className='flex items-center gap-6 text-gray-600'>
          {
            NavbarMenu.map((item) => {
              return(
                <li key={item.id} className='relative group'
                
                >
                  <div className='py-2 px-3 cursor-pointer'>
                  <Link to={item.link} className='inline-block py-1 px-3
                   hover:text-primary font-semibold'>{item.title}</Link>
                   {item.subLinks && (
                             <ul className="absolute left-0 mt-1 w-28 bg-red-100 p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 ease-in-out">
                              {item.subLinks.map((sub, index) => (
                                    <li key={index} className='text-center'>
                                        <Link to={sub.link} className="block px-4 py-2 hover:bg-red-400">
                                            {sub.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        </div>
                </li>
              )
            })
          }
        </ul>
        </div>
        {/* Icon section */}
        {/* <div className='flex items-center gap-4'>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration:200'>
            <CiSearch  />
          </button>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration:200'>
            <PiShoppingCartThin />
          </button>
          <button className='text-2xl hover:bg-primary text-primary semi-bold hover:text-white
          rounded-md border-2 border-primary px-6 py-2 duration:200 hidden md:block'>
            Login
          </button>
        </div>                                                 */}
        {/* Mobile Menu Humbergar section  */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
          <MdMenu className='text-4xl'/>
        </div>
      </motion.div>
    </nav>
    {/* Mobile Sidebar Section */}
    <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar