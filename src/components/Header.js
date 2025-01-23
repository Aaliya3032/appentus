import React ,{useState ,useEffect} from 'react'
import logo from '../assets/Logo.png'
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Header1 */}
      <div className='bg-[#fee8e9]'>
        <div className='flex lg:flex-row flex-col gap-2 justify-between w-[80%] mx-auto py-2'>

          <div className='text-[#a41d23] flex flex-row items-center gap-2'>
            <div>
              <img src={logo} alt='logo' className='w-16 h-16'/>
            </div>
            <div className='flex flex-col justify-center font-bold'> 
              <div className='text-xl'>HAZIRA</div>
              <div className='text-sm'>PLANT</div>
            </div>
          </div>

          <hr className='h-0.5 my-2 bg-[#a41d23] lg:hidden block'></hr>

          <div className='flex sm:flex-row flex-col items-center justify-end py-2 gap-2'>

            <div className='w-full sm:w-auto flex flex-row items-center justify-end gap-2'>
            <div className='flex flex-col gap-1 sm:font-bold font-medium text-xs font-ubuntu'>
              <div className=''>Crude Oil WTI(USD/Bbl)70.463</div>
              <div className='text-green-600 flex justify-end'>0.273(+0.39%)</div>
            </div>

            <div className='sm:block hidden'>
              <button className='flex flex-row border p-1.5 sm:gap-2 border-[#a5b396] text-xs font-medium rounded-2xl items-center'>
                <FiSearch className='text-xl'/>
                <input placeholder='Search' className='bg-transparent placeholder-black focus:outline-none'/>
              </button>
            </div>
            </div>

            <div className='w-full sm:w-auto flex flex-row items-center justify-end gap-2'>
            <div>
              <button className='bg-[#a41d23] text-white font-medium text-xs py-2 px-5 rounded-full'>Login</button>
            </div>

            <div className='sm:block hidden'>
              <span className='text-xs font-medium flex items-center'>English&nbsp;&nbsp;|&nbsp;&nbsp;हिन्दी</span>
            </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Header2 */}
      <div className={`w-full  bg-[#a41d23] shadow-sm ${
          isScrolled ? "fixed top-0 left-0 right-0" : "relative"
        } z-20 transition-[top] duration-300 ease-in-out`}>
        <div className='w-[80%] mx-auto py-4'>

        <button
          class="lg:hidden text-white bg-transparent focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div className="hidden lg:flex flex-row gap-3 w-[90%] mx-auto text-xs">
        <NavLink
            to="/"
            className='text-white font-ubuntu'
          >
            Home
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>About</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Technical Information</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Departments</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>HSE</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Online Services</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Phone Directory</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Incident Reporting</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        <NavLink
            to="/about"
            className='text-white font-ubuntu'
          >
            <span className='flex flex-row gap-0.5'>
              <span>Miscellaneous</span>
              <IoMdArrowDropdown className='text-lg'/>
            </span>
          </NavLink>
        </div>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#526585]">
           <nav className="flex flex-col font-ubuntu items-start p-4 text-sm">
           <NavLink
              to="/"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Home</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">About</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Technical Information</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Departments</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">HSE</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Online Services</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Phone Directory</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Incident Reporting</span>
              </span>
            </NavLink>
           <NavLink
              to="/about"
              className="text-white"
            >
              <span className="flex items-center">
                <IoMdArrowDropright className="text-lg" />
                <span className="ml-1">Miscellaneous</span>
              </span>
            </NavLink>
           </nav>
        </div>
              )}
    </>
  )
}

export default Header