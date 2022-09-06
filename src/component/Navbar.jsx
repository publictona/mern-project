import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
  const auth = localStorage.getItem("user")
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate('/SignUp')
  }

return (
  <div >
    <img  alt='logo' className='logo' src='https://www.google.com/search?q=e+comm+web+logo&rlz=1C1GCEB_enIN1007IN1007&sxsrf=ALiCzsZc_52_FmgWYsJgnbnR5_IXrV1c-g:1662393771086&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjD-s6xg_75AhUSwTgGHf_fC3cQ_AUoAXoECAEQAw&biw=1536&bih=664&dpr=1.25#imgrc=oaWPnLwimJgLgM' />
    {auth ? <ul className='nav-ul nav-left' >
      <li><Link to="/"> Products</Link> </li>
      <li><Link to="/add">Add Product </Link> </li>
      <li><Link to="/update"> Update Product</Link> </li>
      <li><Link to="/Profile"> Profile</Link> </li>
      <li><Link  onClick={Logout} to="/SignUp"> Logout ({JSON.parse(auth).name})</Link> </li>


    </ul>
      :
      <ul className='nav-ul nav-right'>
        <li><Link to="/Login"> Login</Link> </li>
        <li><Link to="/SignUp"> SignUp</Link> </li>


      </ul>
    }
  </div>
)
}

export default NavBar
