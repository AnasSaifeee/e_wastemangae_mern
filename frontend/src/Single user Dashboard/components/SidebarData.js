import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <AiIcons.AiFillBell />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule Pickup',
    path: '/schedule',
    icon: <AiIcons.AiFillCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Status',
    path: '/status',
    icon: <FaIcons.FaTruckMoving />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <RiIcons.RiLogoutBoxFill />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings  ',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  }
];
