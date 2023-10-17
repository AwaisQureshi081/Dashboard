'use client'
import React from 'react'
import {BsHouseExclamationFill,BsMessenger,BsPercent,BsWallet2,Bs0Circle,BsClipboard,BsFillArchiveFill,
  BsPeopleFill} from 'react-icons/bs'
export const Sidebar = ({openSidebarToggle,openSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <Bs0Circle className='icon_header'/>Dashboard
        </div>
        <span className='icon close_icon' onClick={openSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="">
              <BsClipboard className='icon'/>Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
              <BsFillArchiveFill  className='icon'/>Products
            </a>
        </li>
      
        <li className='sidebar-list-item'>
            <a href="">
              <BsPeopleFill className='icon'/>Customers
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
              <BsWallet2 className='icon'/>Income
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
              <BsPercent className='icon'/>Permote
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
              <BsMessenger className='icon'/>Help
            </a>
        </li>


        <li style={{display:'flex', alignItems:'flex-end'}} className='login'>
          <img className='admin-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAVQiNEdJncW4fSobQ_Ln571rGqvUkjL4HA&usqp=CAU'/>
           <div className='admin-about'>
            <h3 style={{display:'inline'}}>Evano</h3><br/>
           <h6  style={{display:'inline'}} className='about'>ProjectManager</h6>
           </div>
        </li>
      </ul>
    </aside>
  )
}
