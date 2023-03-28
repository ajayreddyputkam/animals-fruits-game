import './index.css'

const NavBar = props => {
  const {timerCount, score} = props

  return (
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-time-container">
        <li className="score">
          <p>
            Score:<span className="score-num">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer">{timerCount} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
