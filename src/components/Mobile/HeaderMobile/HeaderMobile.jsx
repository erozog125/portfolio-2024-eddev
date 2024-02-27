import React from 'react'
import './HeaderMobile.css'
import { CiMenuBurger } from "react-icons/ci";

export const HeaderMobile = () => {
  return (
    <header>
      <CiMenuBurger className='menu-burger' />
      <h1>Edwin Rozo Gómez</h1>
    </header>
  )
}
