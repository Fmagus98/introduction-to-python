import React from 'react'
import {useLocation} from 'react-router-dom'
import {colorPrimaryPython} from '../../colors'

const Footer = () => {
  const location = useLocation()
  
  const color = location.pathname.includes("micropython")?"#B34229":colorPrimaryPython

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