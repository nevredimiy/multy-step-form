import React from 'react'

const LastStepItem = ({ data, reduction }) => {
  
  return (
    <li className="total__add-on-item">
        <div className="total__add-on-item-name">{data.title}</div>
        <div className="total__add-on-item-price">{`+$${data.price}/${reduction}`}</div>
    </li>
  )
}

export default LastStepItem
