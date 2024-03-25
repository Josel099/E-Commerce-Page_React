import React from 'react'
import HeaderComponent from '../header/HeaderComponent'
import FooterComponent from '../footer/FooterComponent'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (

    <div>
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
    </div>
  
    )
}

export default MainLayout