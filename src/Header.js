import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header() {
  return (
  <div className='header'>
  <div className='header__left'>
        <LinkedInIcon color='primary' sx={{ fontSize: 40 }}/>
        <div className='header__search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
    </div>
    <div className='header__right'></div>
  </div>
  )
}

export default Header