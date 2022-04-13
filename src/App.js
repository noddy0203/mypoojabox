import React from 'react'
import Product from './components/Product'
import Offer from './components/Offer'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import SubMenu from './components/SubMenu'
import Video from './components/Video'
const App = () => {
  return (
    <>
       <Offer/>
       <Navbar />
       <SideBar />
       <SubMenu/>
       <Video/>
       <Product/>
    </>
  )
}

export default App