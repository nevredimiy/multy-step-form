import React from 'react'
import './Button.scss'

const Button = ({text, classMod, onClick}) => {
  return (
    <button onClick={onClick} className={`btn ${classMod}`}>{text}</button>
  )
}

export default Button
