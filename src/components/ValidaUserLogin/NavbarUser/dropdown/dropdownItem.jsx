import React from 'react'
import "../dropdown/dropdownitem.css"

const DropdownItem = (props) => {
  return (
    <>
    <li className='dropdownItem'>
    {/* <img src="" alt="" /> */}
    <p>{props.text}</p>
    </li>
    </>
      
  )
}

export default DropdownItem
