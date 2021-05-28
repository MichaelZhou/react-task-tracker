import React from 'react'
import PropTypes from 'prop-types'
import Button from "./Button"


const onClick = () => {
  console.log('click')
}

const Header = ({ title, onAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
