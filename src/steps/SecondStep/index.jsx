import React from 'react';
import Description from '../../components/Description';
import './SecondStep.scss';
import PlanBlock from './PlanBlock';
import { dataMFContext } from '../../App';
import dataPlanType from '../../assets/dataPlanType';
import dataAddOns from '../../assets/dataAddOns.json';

const SecondStep = () => {
  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);

  let arrAddOn = dataTotal.addOn;

  const handleSwitch = (e) => { 
    if (e.target.checked) {

      dataAddOns.yearly.map(item => {
        return arrAddOn.forEach(el => {
          if (el.id === item.id) {
            el.price = item.price;
          }
        })
      })
      
      dataPlanType.yearly.forEach(el => {

        if (el.plan === dataTotal.plan) {
          console.log(el.price)
          setDataTotal(prevState => ({ ...prevState, planPrice: el.price }));
        }
      })     
           
      setDataTotal(prevState => ({ ...prevState, optionBilling: "Yearly", reduction: "yr", billingSwitch: true, spanClassMo: '', spanClassYr: 'active', addOn: arrAddOn, dataPlanType: dataPlanType.yearly }));
    } else {

      //update array addOn
      arrAddOn.map(item => {
        return dataAddOns.monthly.forEach(el => {
          if (el.id === item.id) {
            item.price = el.price;
          }
        })
      });

      dataPlanType.monthly.forEach(el => {
        if (el.plan === dataTotal.plan) {
          setDataTotal(prevState => ({ ...prevState, planPrice: el.price }));
        }
      })           
      setDataTotal(prevState => ({ ...prevState, optionBilling: "Monthly", reduction: "mo", billingSwitch: false, spanClassMo: 'active', spanClassYr: '', addOn : arrAddOn, dataPlanType: dataPlanType.monthly }));
    }
  }  

  return (
    <>
      <Description title="Select your plan" text="You have the option of monthly or yearly billing." />        
      
      <div className='plan'>

        {
          dataTotal.dataPlanType.map((item) => {
            let activeClass = '';
            if (item.plan === dataTotal.plan) {
              activeClass = 'active';
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
