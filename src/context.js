import React, { createContext, useContext, useState } from 'react'
import sublinks from "./data"
const AppContext = createContext()

export const  AppProvider = ({children})=>{
    // state for sideBar and submenu
const [isSideBarOpen , setIsSideBarOpen] = useState(false)
const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
const [location , setLocation] = useState({})
const [page, setPage] = useState({page:"", links:[]})
const openSideBar = ()=>{
    setIsSideBarOpen(true)
}

const closeSideBar = ()=>{
   setIsSideBarOpen(false)
}
const openSubMenu = (text, coordinates)=>{
     const page = sublinks.find( link=> link.page === text )
     setPage(page)  
     setLocation(coordinates)
    setIsSubMenuOpen(true)
}
const closeSubMenu = ()=>{
    setIsSubMenuOpen(false)
}

return (
    <AppContext.Provider value={{
        isSideBarOpen ,page ,isSubMenuOpen, openSubMenu, location, closeSubMenu, openSideBar, closeSideBar
    }}>
         {children}
    </AppContext.Provider>
)}

// creating custome hook
export const useGlobalContext  = ()=>{
       return useContext(AppContext) 
}