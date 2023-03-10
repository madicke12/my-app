import React from "react";
import Ulist from './Ulist'
import myimg from'./logo192.png'

 const Header =()=>{
    return(
      <header>
      <nav className='navbar'> 
        <img src={myimg}/>
        <Ulist/>
      </nav>
      </header>
    )
  }
  export default Header;