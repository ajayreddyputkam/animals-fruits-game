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
      <div className="score-time-container">
        <p className="score">
          Score:<span className="score-num">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer">{timerCount} sec</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
