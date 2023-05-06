import {Link} from 'react-router-dom'

import './index.css'

const ItemPopular = props => {
  const {itemDetails} = props
  const {posterPath, title, id} = itemDetails

  return (
    <li className="li-container">
      <Link to={`/movies/${id}`}>
        <img src={posterPath} alt={title} className="tending-movie-poster" />
      </Link>
      <p className="title">{title}</p>
    </li>
  )
}

export default ItemPopular
