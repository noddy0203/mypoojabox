import React from 'react'
import { FaBars } from "react-icons/fa"
import { useGlobalContext } from '../context'
const Navbar = () => {
  
  const {openSideBar, openSubMenu, closeSubMenu} = useGlobalContext()
  const displaySubMenu = (e)=>{
     const page = e.target.textContent
     const temp = e.target.getBoundingClientRect()
     const center = (temp.left+temp.right)/2
     const bottom = temp.bottom-3
     openSubMenu(page, {center, bottom})
  }
  return (
    <>
      <nav className='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='btn toggle-btn' onClick={openSideBar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>Shop</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>Home Decor</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>Festive Decor</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar