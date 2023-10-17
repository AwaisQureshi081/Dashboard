'use client'
import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
export const Header = ({openSidebar}) => {
  
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={openSidebar}/>
        </div>
        <div className='header-left'>
            <span style={{fontWeight:'bold'}}>Hello Shahrukh👋</span>

        </div>
        <div className='header-right'>
            <div className='search--box'>
            <BsSearch className='icon'/>
            <input type='text' placeholder='Search'/>
            </div>
            
        </div>
    </header>
  )
}
