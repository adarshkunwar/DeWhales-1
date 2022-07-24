import '../pages/Team.css';
import React from 'react'
import { IoDiamondSharp } from 'react-icons/io5';
import * as FaIcons from "react-icons/fa";

export const Team = () => {
  return (
    <>
    <div className="main">
        <div className="profile-card">
            <div className="img">
                <img src="https://www.arweave.net/YqrPzGzwhGVSxMMSqi38w9dv3ZNa_mS7ZM2H5rXGSvg" alt='334'/>
            </div>
            <div className="caption">
                <h3>anku</h3>
                <p>Founder</p>
                    <div className="social-links">
                        <a href='https://www.diamondapp.com/u/anku' target='_blank' rel="noreferrer">
                        <IoDiamondSharp size={25}/>
                        </a>
                        <a href='https://www.twitter.com/whoisanku' target='_blank' rel="noreferrer">
                        <FaIcons.FaTwitter size={25}/>
                        </a>
                    </div>
                    </div>
        </div>
        <div className="profile-card">
            <div className="img">
                <img src="https://www.arweave.net/m1LLmj3V0XJoQ48kYPM-vNk7v5zPWh6tRg1ScyMsT8o" alt='333'/>
            </div>
            <div className="caption">
                <h3>aryog</h3>
                <p>Backend Developer</p>
                    <div className="social-links">
                        <a href='https://www.diamondapp.com/u/aryog' target='_blank' rel="noreferrer">
                        <IoDiamondSharp size={25}/>
                        </a>
                        
                    </div>
                    </div>
        </div>
         <div className="profile-card">
            <div className="img">
                <img src="https://www.arweave.net/yNzOVD-zjgGpSsO9eIVZecWIyh0ZcK4trqE-aQlVfMw" alt='333'/>
            </div>
            <div className="caption">
                <h3>Nona</h3>
                <p>Artist</p>
                    <div className="social-links">
                    <a href='https://diamondapp.com/u/NonaRivers' target='_blank' rel="noreferrer">
                        <IoDiamondSharp size={25}/>
                        </a>
                        <a href='https://twitter.com/_nonarivers_' target='_blank' rel="noreferrer">
                        <FaIcons.FaTwitter size={25}/>
                        </a>
                    </div>
                    </div>
        </div>
        <div className="profile-card">
            <div className="img">
                <img src="https://www.arweave.net/iaJZ9FFrceIps8gbiD3_3z0RCzG59Z3_6C5wyOynpcs" alt='333'/>
            </div>
            <div className="caption">
                <h3 className='alex'>alex</h3>
                <p>Game Dev</p>
                    <div className="social-links">
                        <a href='https://www.diamondapp.com/u/alexcommoner' target='_blank' rel="noreferrer">
                        <IoDiamondSharp size={25}/>
                        </a>
                        <a href='https://twitter.com/AlexCommoner' target='_blank' rel="noreferrer">
                        <FaIcons.FaTwitter size={25}/>
                        </a>
                    </div>
                    </div>
        </div> 
        </div>

           
        
    </>
  )
}
