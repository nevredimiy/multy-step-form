import React from 'react';
import Description from '../../components/Description';
import './SecondStep.scss';
import PlanBlock from './PlanBlock';
import { dataMFContext } from '../../App';
import dataPlanType from '../../assets/dataPlanType';
import dataAddOns from '../../assets/dataAddOns.json';

const SecondStep = () => {
  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);
  const [dataBilling, setDataBilling] = React.useState(dataPlanType.monthly);

  let arrAddOn = dataTotal.addOn;

  const handleSwitch = (e) => { 
    if (e.target.checked) {

      //Update array addOn
      arrAddOn.map(item => {
        return dataAddOns.yearly.forEach(el => {
          if (el.id === item.id) {
            item.price = el.price;
          }
        })
      });

      setDataTotal(prevState => ({ ...prevState, optionBilling: "Yearly", reduction: "yr", billingSwitch: true, spanClassMo: '', spanClassYr: 'active', addOn : arrAddOn }));
      setDataBilling(dataPlanType.yearly);
    } else {

      //update array addOn
      arrAddOn.map(item => {
        return dataAddOns.monthly.forEach(el => {
          if (el.id === item.id) {
            item.price = el.price;
          }
        })
      });
        
      setDataTotal(prevState => ({ ...prevState, optionBilling: "Monthly", reduction: "mo", billingSwitch: false,spanClassMo: 'active', spanClassYr: '', addOn : arrAddOn }));
      setDataBilling(dataPlanType.monthly);
    }
  }  

  return (
    <>
      <Description title="Select your plan" text="You have the option of monthly or yearly billing." />        
      
      <div className='plan'>

        {
          dataBilling.map((item) => {
            let activeClass = '';
            if (item.plan === dataTotal.plan) {
              activeClass = 'active'
            } 
            return <PlanBlock key={item.id} data={item} activeClass={activeClass} />
          })
        }
      
      </div>  

      <div className="switch-box">          
        <span className={dataTotal.spanClassMo}>Monthly</span>
        <label className="switch">
          <input type="checkbox" onChange={handleSwitch} checked={dataTotal.billingSwitch} />
          <span className="slider round"></span>
        </label>
        <span className={dataTotal.spanClassYr}>Yearly</span>          
      </div>
      
    </>
   
  )
}

export default SecondStep
