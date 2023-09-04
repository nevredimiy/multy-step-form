import React from 'react';

import './FirstStep.scss';
import Description from '../../components/Description';
import { dataMFContext } from '../../App';

const FirstStep = () => {
    
  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);

  const handleName = (e) => {
    if (e.target.value) {
      setDataTotal({...dataTotal, name: e.target.value })
    }
  }
  
  //Apply useRef for data transfer
  let inputEmail = React.useRef();
  const handleEmail = () => {
    if (isEmail(inputEmail.current.value)) {
      let email = inputEmail.current.value.trim();
      setDataTotal({...dataTotal, email: email })
    } else {
      setDataTotal({...dataTotal, email: "" })
      // setClassEmailError("error");
      setDataTotal({...dataTotal, validEmail: "error" })
    }    
  }

  const handlePhone = (e) => {
    if (e.target.value === "") {
    }

    if (e.target.value) {
      setDataTotal({...dataTotal, phone: e.target.value })
    }
  }

  const focusInputName = () => {
    setDataTotal({...dataTotal, validName: "" })
  }

  const focusInputEmail = () => {
    setDataTotal({...dataTotal, validEmail: "" })
  }

  const focusInputPhone = () => {
    setDataTotal({...dataTotal, validPhone: "" })
  }

  const isEmail = (email) => {
    email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (  
    <>
      <Description title="Personal info" text="Please provide your name, email address, and phone number." />       
    
      <form className="form-person">
        <div className={`form-person__block ${dataTotal.validName}`}>
          <div className="form-person__label-block">
            <label className="form-person__label" htmlFor="name">Name</label>
            <div className="form-person__label-error">This field is required</div>
          </div>          
          <input className="form-person__input" type="text" id="name" placeholder='e.g. Stephen King' onFocus={focusInputName} onBlur={handleName} defaultValue={dataTotal.name} />    
        </div>
        <div className={`form-person__block ${dataTotal.validEmail}`}>
          <div className="form-person__label-block">
            <label className="form-person__label" htmlFor="email">Email Address</label>
            <div className="form-person__label-error input-email">This field is required</div>
          </div>
          <input className="form-person__input" name="email" type="email" id="email" placeholder="e.g. stephenking@lorem.com" onFocus={focusInputEmail}  onBlur={handleEmail} defaultValue={dataTotal.email} ref={inputEmail} />    
        </div>
        <div className={`form-person__block ${dataTotal.validPhone}`}>
          <div className="form-person__label-block">
            <label className="form-person__label" htmlFor="phone">Phone Number</label>
            <div className="form-person__label-error">This field is required</div>
          </div>          
          <input className="form-person__input" type="text" id="phone" onFocus={focusInputPhone} onInput={handlePhone} placeholder="e.g. +1 234 567 890" defaultValue={dataTotal.phone} />    
        </div>          
      </form>
    </>
      
  )
}

export default FirstStep
