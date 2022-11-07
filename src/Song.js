const Song = (props) => {
  return (
    <li className="song">
      <div className="song-info">
        <h3>Song: {props.song}</h3>
        <h3>Length: {props.length}</h3>
        <h5>Album: {props.album}</h5>
        <h5>Artist: {props.artist}</h5>
      </div>
    </li>
  )
}

export default Song
