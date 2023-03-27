import './index.css'

const GameItem = props => {
  const {eachImage, checkingTheImage} = props
  const {id, thumbnailUrl} = eachImage

  const isImageSame = () => {
    checkingTheImage(id)
  }

  return (
    <li className="list-images">
      <button className="thumbnail-button" type="button" onClick={isImageSame}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default GameItem
