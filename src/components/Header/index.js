const TabItem = props => {
  const {tabDetails, isActive, isActiveChange} = props
  const {buttonText, id} = tabDetails
  const onTabClick = () => {
    isActiveChange(id)
  }
  const activeClass = isActive ? 'tab active' : 'tab'

  return (
    <li onClick={onTabClick} className={activeClass}>
      <button type="button">{buttonText}</button>
    </li>
  )
}

export default TabItem
