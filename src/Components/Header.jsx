import React from 'react'
import { CiDark, CiLight } from "react-icons/ci";
import "../App.css"


const Header = ({ theme, Inc }) => {


  return (
 <nav className="fs-4 text-light navbar justify-content-between ">
  <a className="navbar-brand"> <div className='p-2 logo d-flex text-white align-items-center'>
    <span>{"< >"} </span>
    <div className='d-flex align-items center gap-2'>
      <span className='fs-5'> Muhammad Sumair</span><span>{"< />"}</span>
    </div>
  </div></a>
  <form className="form-inline">
    <div className='p-2' onClick={Inc}>
        {theme === "dark" ? <CiLight size={40} role='button' /> : <CiDark size={40} role='button' />}
      </div>
  </form>
</nav>

  )
}

export default Header;