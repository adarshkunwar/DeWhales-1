import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => { setSidebar(!sidebar); console.log(sidebar) }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to="/" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="/" className='menu-close'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index)=> {
                    return(
                        <div className='list-items'>
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}&nbsp;&nbsp;
                                <span className='title'>{item.title}</span>
                            </Link>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar