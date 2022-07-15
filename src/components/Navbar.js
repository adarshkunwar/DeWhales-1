import React, {useState} from 'react'
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData, footerdata} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import img from '../assets/navbarlogo.png';

import { identity } from "bitclout-sdk";
// const host = "https://deso-backend.herokuapp.com";
const host = "http://localhost:4000";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [name, setName] = useState("User");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Key, setKey] = useState(null);

    const fetchProfile = async (publicKey) => {
        // todo API calls in the backend
        const response = await fetch(`${host}/`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const json = await response.json();
        console.log(json);
    
        try {
          const responsef = await fetch(`${host}/get-single-profile`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              PublicKeyBase58Check: publicKey,
            }),
          });
          const jsonf = await responsef.json();
          // console.log(jsonf);
          setName(jsonf.Username);
          setSuccess(true);
        } catch (error) {
          console.log("Unable to Login !", "Error!", 5000);
        }
        setLoading(false);
      };


    const handleClick = async () => {
        setLoading(true);
        const response = await identity.login({ accessLevel: 2 });
        console.log(response);
        const jsonObj = JSON.stringify(response);
        localStorage.setItem("payload", jsonObj);
        const publicKey = response.publicKeyAdded;
        fetchProfile(publicKey);
        setKey(publicKey);
      };


    const showSidebar = () => { setSidebar(!sidebar); console.log(sidebar) }
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            
            <Link to="/" className='menu-bars'>
            <CgMenuRound className='openicon' onClick={showSidebar}/>
            </Link>
            <img src={img} alt='img' className='navimg'/>
            
            <div className='mybutton'>
             <button type="button" className="mybtn" onClick={handleClick}>{success?`${name}`:loading?"Loading...":"Connect Wallet"}</button> 
        </div>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="/" className='menu-close'>
                        <CgCloseO/>
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