import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { Link } from "react-router-dom";
import { SidebarData, footerdata} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import img from '../assets/navbarlogo.png';

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
            <img src={img} alt='img' className='navimg'/>
            {/* <button type="button" className="btn btn-outline-info mybtn">Connect Wallet</button> */}
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="/" className='menu-close'>
                        <ImIcons.ImCross />
                    </Link>
                </li>
                
                <div className='gap'></div>
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
                 <div className='foot-items'>
                {footerdata.map((item, index)=> {
                    return(
                        <li key={index} className={item.className} style={{listStyleType: 'none'}}>
                            <a href={item.href} target='_blank' rel="noreferrer">
                                {item.icon}&nbsp;&nbsp;
                                
                            </a>
                        </li>
                    )
                })}
                </div>
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar