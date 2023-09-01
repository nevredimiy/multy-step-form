import React from 'react';

import './App.scss';
import Button from './components/Button/Button';
import FirstStep from './steps/FirstStep';
import Sidebar from './components/Sidebar/Sidebar';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import LastStep from './steps/LastStep';
import dataAddOns from './assets/dataAddOns.json';

export const dataMFContext = React.createContext();

function App() {
  const [step, setStep] = React.useState(0);
  const [addOns, setAddOns] = React.useState(dataAddOns.monthly);

  const [dataTotal, setDataTotal] = React.useState({
    "name": "",
    "email": "",
    "phone": "",
    "plan": "",
    "planPrice" : 0,
    "optionBilling": "Monthly",
    "reduction": "mo",
    "billingSwitch": false,
    "spanClassMo": 'active',
    "spanClassYr": '',
    "addOn": []
  });

 
  const handleSteps = () => {
    if (dataTotal.reduction === 'mo') {
      setAddOns(dataAddOns.monthly);
    } else {
      setAddOns(dataAddOns.yearly);
    }
    
    if (step < 3) {
      setStep(step + 1);
    }

    if (step === 3) {
      console.log('last step')
    }
  }  

  const conditionalComponent = () => {
    switch (step) {
        case 0:
        return <FirstStep />;
        case 1:
        return <SecondStep />;
        case 2:
        return <ThirdStep addOns={addOns} />;
        case 3:
        return <LastStep dataTotal={dataTotal} changeStep={handleStep} />;
        default:
        return <FirstStep />;
    }
  };

  const handleStep = (numStep) => {
    setStep(numStep);
  }

  return (
    <div className="App">
      <Sidebar currentStep={step} changeStep={handleStep} />

      <div className='main'>
        <div className="main__wrapper container">
          <dataMFContext.Provider value={{ dataTotal, setDataTotal }}>
            {conditionalComponent()}
          </dataMFContext.Provider>
        </div>
      </div>
      
      <div className='wrapper-btn'>
        {step > 0 && <Button text="Go back" classMod="btn--transparent" onClick={() => setStep(step - 1)} />}
        <Button text= { step === 3 ? "Submit" : "Next step" } onClick={handleSteps} />
      </div>
      
    </div>
  );
}

export default App;
