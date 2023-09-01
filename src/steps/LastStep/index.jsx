import React from 'react'
import Description from '../../components/Description';
import './LastStep.scss';
import LastStepItem from './LastStepItem';

const LastStep = ({ dataTotal, changeStep }) => {
    const [total, setTotal] = React.useState(dataTotal.planPrice);

    React.useEffect(() => {
        let subTotal = 0;
        dataTotal.addOn.forEach(element => {
            subTotal += element.price;   
        });

        setTotal( total + subTotal )
    }, [dataTotal])

    const jumpToStep = () => {
        changeStep(1);
    }


  return (
      <div className='total'>
          <Description title="Finishing up" text="Double-check everything looks OK before confirming." />
          <div className="total__info">
              <div className="total__plan">
                  <div className="total__plan-name">
                      <p className="total__plan-title">{dataTotal.plan}({dataTotal.optionBilling})</p>
                      <a href="!#" onClick={jumpToStep} className="total__plan-change">Change</a>
                  </div>
                  <div className="total__plan-price">{`$${dataTotal.planPrice} /${dataTotal.reduction}`}</div>
              </div>
              <hr />
              <ul className="total__add-on-list">
                  {
                      dataTotal.addOn.map((item, index) => {
                          return <LastStepItem key={index} data={item} reduction={dataTotal.reduction} />
                      })
                  }
              </ul>
          </div>
          <div className="total__summary">
              <div className="total__summary-name">Total ({`per ${dataTotal.optionBilling}`})</div>
              <div className="total__summary-num">{`$${total}/${dataTotal.reduction}`}</div>
          </div>
    </div>
  )
}

export default LastStep
