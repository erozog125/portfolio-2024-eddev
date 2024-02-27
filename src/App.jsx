import React from 'react'
import { BrowserView,MobileView } from 'react-device-detect'
import { BrowserV } from './components/Browser/BrowserV/BrowserV'
import { MobileV } from './components/Mobile/MobileV/MobileV'


export const App = () => {
  return(
    <>
      <MobileView><h1>Soy el celular</h1></MobileView>
      <BrowserView><h1>Soy el navegador</h1></BrowserView>
    </>
  )
} 
