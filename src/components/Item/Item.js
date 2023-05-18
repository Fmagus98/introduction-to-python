import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({ item }) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0
    });
  };
  const date = new Date()
  const dateFirebase = new Date(item.date.toDate())
  const itemDate = date >= dateFirebase ?
    <Link to={`/classes/${item.id}`} onClick={handleLinkClick} className="class-teory card h-100">
      <div className="card-body">
        <h5 className="text-center card-title mb-2">{item.class}</h5>
        <ul className="intr-ul">
          <li className="card-text text-center">{item.content[0]}</li>
          <li className="card-text text-center">{item.content[1]}</li>
          <li className="card-text text-center">{item.content[2]}</li>
        </ul>
      </div>
    </Link>
    :
    <div className="class-teory card h-100"><div className="card-body">
      <h5 className="text-center card-title mb-2">{item.class}</h5>
      <ul className="intr-ul">
        <li className="card-text text-center">{item.content[0]}</li>
        <li className="card-text text-center">{item.content[1]}</li>
        <li className="card-text text-center">{item.content[2]}</li>
      </ul>
      <h6 className="text-center mx-auto">Clase disponible el {item.date.toDate().toLocaleDateString()}</h6>
    </div>
    </div>

  return (
    <div className="item col mb-4">
      {itemDate}
    </div>
  )
}

export default Item