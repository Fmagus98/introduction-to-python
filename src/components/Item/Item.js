import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Item = ({ item }) => {
  const location = useLocation()
  const redirect = location.pathname.includes("micropython")?"/micropython/classes/":"/classes/"
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0
    });
  };
  const date = new Date()
  const dateFirebase = new Date(item.date.toDate())
  const itemDate = (date >= dateFirebase)||(localStorage.getItem("access") && !location.pathname.includes("micropython"))?
    <Link to={`${redirect}${item.id}`} onClick={handleLinkClick} className='mx-auto class-teory card w-75' style={{background:location.pathname.includes("micropython")?"#B34229":"#012973"}}>
      <div className="card-body">
        <h4 className="text-center mb-2">{item.class}</h4>
        <ul className="intr-ul">
          <li className="text-center">{item.content[0]}</li>
          <li className="text-center">{item.content[1]}</li>
          <li className="text-center">{item.content[2]}</li>
        </ul>
      </div>
    </Link>
    :
    <div className="mx-auto class-teory-null bg-dark text-light card w-75" ><div className="card-body">
      <h4 className="text-center mb-2">{item.class}</h4>
      <ul className="intr-ul">
        <li className="text-center">{item.content[0]}</li>
        <li className="text-center">{item.content[1]}</li>
        <li className="text-center">{item.content[2]}</li>
      </ul>
      <h6 className="text-center mx-auto">Clase disponible el {item.date.toDate().toLocaleDateString()}</h6>
    </div>
    </div>

  return (
    <div className="col-md-6 mb-4">
      {itemDate}
    </div>
  )
}

export default Item