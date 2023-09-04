import React from 'react'
import './Popap.scss';
import IconComplite from '../../assets/images/icon-thank-you.svg';

const Popap = ({dataPopap}) => {
  return (
    <div className={`popap ${dataPopap.class}`}>
      <div className="popap__wrapper">
        <img className="popap__icon" src={IconComplite} alt="Thank You" />
        <h2 className='popap__title'>Thank you!</h2>
          <p className='popap__text'>Thanks for confirming your subscription! We hope you have fun 
          using our platform. If you ever need support, please feel free 
          to email us at {dataPopap.email}.</p>
      </div>
      
    </div>
  )
}

export default Popap
