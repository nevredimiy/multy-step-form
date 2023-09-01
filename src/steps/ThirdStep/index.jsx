import React from 'react'
import AddOn from './AddOn'
import Description from '../../components/Description'
import './AddOn.scss';

const ThirdStep = ({ addOns }) => {
   
  return (
    <div className='add-on'>
      <Description title="Pick add-ons" text="Add-ons help enhance your gaming experience." />
      {
        addOns.map((addOn) => {
          return <AddOn key={addOn.id} data={addOn} id={addOn.id} title={addOn.name} text={addOn.desc} price={addOn.price} reduction={addOn.reduction} />
        })
      }
    </div>
  )
}

export default ThirdStep
