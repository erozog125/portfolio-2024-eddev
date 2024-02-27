import React from 'react'
import { BrowserView,MobileView } from 'react-device-detect'
import { BrowserV } from './components/Browser/BrowserV/BrowserV'
import { MobileV } from './components/Mobile/MobileV/MobileV'


export const App = () => {
  return(
    <>
      <BrowserView>
        <BrowserV />
      </BrowserView>
      <MobileView>
        <MobileV />
      </MobileView>
    </>
  )
} 
