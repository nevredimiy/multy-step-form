import React from 'react'

import { dataMFContext } from '../../App';

const PlanBlock = ({ data, activeClass }) => {
  
  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);

  const handleRadio = () => {
    unCheckedRadio();
    setDataTotal(prevState => ({ ...prevState, plan: data.plan, planPrice: data.price }));
  }

  const unCheckedRadio = () => {
    const plans = document.querySelectorAll('.plan__block');
    plans.forEach(plan => {
      plan.classList.remove('active');
    })
  }

  return (
    <div className={`plan__block ${activeClass}`} onClick={handleRadio}>
      <img className='plan__icon' src={data.image} alt="Arcade" />
        <div className="plan__info">
        <h3 className='plan__title'>{data.plan}</h3>
          <p className="plan__price">{`$${data.price}/${dataTotal.reduction}`}</p>
          <p className={data.class}>2 months free</p>
        </div> 
    </div> 
  )
}

export default PlanBlock
