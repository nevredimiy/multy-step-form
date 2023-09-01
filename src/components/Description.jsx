import React from 'react'

const Description = ({title,text}) => {
  return (
    <div className='main__desc'>
      <h1 className="main__title">{title}</h1>
      <p className="main__text">{text}</p>
    </div>
  )
}

export default Description
