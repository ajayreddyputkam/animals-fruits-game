import './index.css'

const TabItem = props => {
  const {eachTab, clickTabToChange, isActive} = props
  const {tabId, displayText} = eachTab

  const changeTab = () => {
    clickTabToChange(tabId)
  }

  const activeTabStyle = isActive ? 'is-active-style' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-button ${activeTabStyle}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
