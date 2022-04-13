import React from 'react'
import {BiSearch} from "react-icons/bi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {useGlobalContext} from "../context"
const Offer = () => {
    const {closeSubMenu} = useGlobalContext()
    return (
        <>
            <section onMouseOver={closeSubMenu} style={{backgroundColor:"pink", height:"30px"}}>
                <h4 style={{textAlign:"center", paddingTop:"6px"}}>USE CODE AWESOME20 FOR 20% OFF</h4>
                <div className='titleContainer'>
                      <div className='loginDiv'>
                          <p className='hiiThere'>Hii, there</p>
                          <p><a href="/"> Login</a> OR <a href="/">Register</a></p>
                      </div>
                      <div className='titleDiv'>
                          <h2 className='my'>My</h2>
                          <h3 className='pooja'>POOJA BOX</h3>
                          <h5>The Art <span>of</span> Gifting</h5>
                      </div>
                      <div className='cartDiv'>
                          <p><BiSearch/> Search</p>
                          <p><AiOutlineShoppingCart/>Cart <span className='cartNumber'>0</span> </p>
                      </div>
                </div>
            </section>
        </>
    )
}

export default Offer