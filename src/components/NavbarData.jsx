import React from 'react'
import * as AiIcons from 'react-icons/ai'


export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillBuild />,
        className: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiIcons.AiFillFormatPainter />,
        className: 'nav-text'
    },
]