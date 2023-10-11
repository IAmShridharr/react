import React from 'react'

const ColorButton = ({color, buttonText, changeColor}) => {
  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: color}} onClick={() => changeColor(color)}>{buttonText}</button>
  )
}

export default ColorButton