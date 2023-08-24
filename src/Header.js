import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {

  return (
   <div className='flex justify-evenly border-b w-full sticky top-0 py-1'>
    {/* Header-left */}
     <div className='flex my-2'>
    <img className="w-8 object-contain" src={require("./LinkedIn_logo_initials.png")} alt='linkedin icon'/>
    
    <div className='mx-1.5 bg-gray-100 w-70 rounded'>
    <SearchIcon/>
    <input type='text' className='bg-transparent py-0.5 outline-none' placeholder='Search'/>

    </div>
    </div>
    {/* Header-right */}
    <div className='flex '>
    <HeaderOptions Icon={HomeIcon} title="Home"/>
    <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
    <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
    <HeaderOptions Icon={MessageIcon} title="Messaging"/>
    <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
    <HeaderOptions avatar={require("./avat.jpg")} title="Me"/>
    </div>
   </div>
  )
}

export default Header;