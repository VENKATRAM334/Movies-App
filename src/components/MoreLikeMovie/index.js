import './index.css'

const MoreLikeMovie = props => {
  const {likedMovieDetails} = props
  const {posterPath, title} = likedMovieDetails

  return (
    <li className="liked-li">
      <div>
        <img src={posterPath} alt={title} className="more-liked-poster" />
        <p className="title">{title}</p>
      </div>
    </li>
  )
}

export default MoreLikeMovie
