import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoMdPhotos } from 'react-icons/io';
import { IoDiamondSharp } from 'react-icons/io5';
import { SiGooglemessages } from 'react-icons/si';
import * as FaIcons from "react-icons/fa";
import { RiRoadMapFill} from 'react-icons/ri';


export const SidebarData = [
    {
        title: <div className='side-text'>Home</div>,
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: <div className='side-text'>Vision</div>,
        path: '/vision',
        icon: <RiRoadMapFill />,
        className: 'nav-text'
    },
    {
        title: <div className='side-text'>Chats</div>,
        path: '/chats',
        icon: <SiGooglemessages />,
        className: 'nav-text'
    },
    {
        title: <div className='side-text'>Gallery</div>,
        path: '/gallery',
        icon: <IoMdPhotos />,
        className: 'nav-text' 
    },
    {
        title: <div className='side-text'>Team</div>,
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    }
    
]

export const footerdata =  [
    {
        href: 'https://discord.gg/UTP2Hgau',
        icon: <FaIcons.FaDiscord size={35} style={{color:'White'}}/>,
        className: 'links'
    },
        {
            href: 'https://www.diamondapp.com/u/dewhales',
            icon: <IoDiamondSharp size={35} style={{color:'White'}}/>,
            className: 'links'
        },
        
        {
            href: 'https://www.twitter.com/dewhales_nft',
            icon: <FaIcons.FaTwitter  size={35} style={{color:'White'}}/>,
            className: 'links'
        }
    ]