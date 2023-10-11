import React from 'react'
import {useLocation} from 'react-router-dom'
import { colorSecondaryPython, colorSecondaryMicropython } from '../../colors'

const Footer = () => {
  const location = useLocation()
  
  const color = location.pathname.includes("micropython")?"#B34229":"#010483"

  return (
    <footer id="footer" style={{backgroundColor:color}}>
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Federico Martearena</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="/">Federico Martearena</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer