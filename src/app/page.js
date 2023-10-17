'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Home } from '@/components/Home'

import { useState } from 'react'



export default function App() {
  const [openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const openSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
  <div className='grid-container'>
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
      <Home/>
      
  </div>
  )
}
