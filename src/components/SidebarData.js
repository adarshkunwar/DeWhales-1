import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IoMdPhotos } from 'react-icons/io';
import { BiMap } from 'react-icons/bi'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'RoadMap',
        path: '/roadmap',
        icon: <BiMap />,
        className: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <IoMdPhotos style={{color: 'white'}}/>,
        className: 'nav-text' 
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    }
    
]
