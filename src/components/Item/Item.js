import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Item = ({ item }) => {
  const location = useLocation()
  const redirect = location.pathname.includes("micropython")?"/micropython/classes/":location.pathname.includes("github")?"/github/classes/":"/classes/"
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0
    });
  };

  let dateClass = new Date(item.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })

  const itemDate = (new Date >= new Date(item.date))||(localStorage.getItem("access") && !location.pathname.includes("micropython") && !location.pathname.includes("github"))?
    <Link to={`${redirect}${item.id}`} onClick={handleLinkClick} className='mx-auto class-teory card w-75' style={{background:location.pathname.includes("micropython")?"#B34229":"#012973"}}>
      <div className="card-body">
        <h3 className="text-center mb-2">{item.class}</h3>
        <ul className="intr-ul">
          <li className="text-center">{item.content[0]}</li>
          <li className="text-center">{item.content[1]}</li>
          <li className="text-center">{item.content[2]}</li>
        </ul>
      </div>
    </Link>
    :
    <div className="mx-auto class-teory-null bg-dark text-light card w-75" ><div className="card-body">
      <h3 className="text-center mb-2">{item.class}</h3>
      <ul className="intr-ul">
        <li className="text-center">{item.content[0]}</li>
        <li className="text-center">{item.content[1]}</li>
        <li className="text-center">{item.content[2]}</li>
      </ul>
      <h6 className="text-center mx-auto">Clase disponible el {dateClass}</h6>
    </div>
    </div>

  return (
    <div className="col-md-6 mb-4">
      {itemDate}
    </div>
  )
}

export default Item