import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoMdPhotos } from 'react-icons/io';
import { IoDiamondSharp } from 'react-icons/io5';
import { BiMap } from 'react-icons/bi'
import * as FaIcons from "react-icons/fa";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Roadmap',
        path: '/roadmap',
        icon: <BiMap />,
        className: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <IoMdPhotos />,
        className: 'nav-text' 
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    }
    
]

export const footerdata =  [
    {
        href: 'https://discord.gg/UTP2Hgau',
        icon: <FaIcons.FaDiscord size={25}/>,
        className: 'links'
    },
        {
            href: 'https://www.diamondapp.com/u/dewhales',
            icon: <IoDiamondSharp size={25}/>,
            className: 'links'
        },
        
        {
            href: 'https://www.twitter.com/dewhales_nft',
            icon: <FaIcons.FaTwitter size={25}/>,
            className: 'links'
        }
    ]