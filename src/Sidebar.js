import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Chinmayi</h2>
            <h4>chinmayisuresh1998@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2000</p>
            </div>
            <div className='sidebar__stat'>
            <p>views on the post</p>
            <p className='sidebar__statNumber'>2000</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('Programming')}
            {recentItem('Software engineering')}
            {recentItem('Design')}
            {recentItem('Developer')}
        </div>
    </div>
  )
}

export default Sidebar

