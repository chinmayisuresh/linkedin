import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
  return (
  <div className='header'>
  <div className='header__left'>
        <LinkedInIcon color='primary' fontSize='large'/>
        <div className='header__search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
    </div>
    <div className='header__right'>
      <HeaderOption title='Home' Icon={HomeIcon}/>
      <HeaderOption title='My network' Icon={SupervisorAccountIcon}/>
      <HeaderOption Icon={BusinessCenterIcon} title='jobs'/>
      <HeaderOption Icon={ChatIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar='https://via.placeholder.com/50' title='me'/>
    </div>
  </div>
  )
}

export default Header