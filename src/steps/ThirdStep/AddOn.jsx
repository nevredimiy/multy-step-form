import React from 'react'
import { dataMFContext } from '../../App'

const AddOn = ({ data }) => {

  const { dataTotal, setDataTotal } = React.useContext(dataMFContext);

  let arrAddOn = dataTotal.addOn;

  const handleInput = (e) => {
    
    //add element to dataMFContext.addOn
    if (e.target.checked) {
      arrAddOn.push({ id: data.id, title : data.name, price:data.price});
      let tempArr = [ ...new Set(arrAddOn)]
      setDataTotal(prevState => ({
        ...prevState,
        addOn : tempArr
      }))

      e.target.parentNode.classList.add('active')

    } else {

      e.target.parentNode.classList.remove('active')
          
      //remove element from dataMFContext.addOn 
      arrAddOn = arrAddOn.filter((item) => {
        return item.id !== data.id;
      })
      setDataTotal(prevState => ({
        ...prevState,
        addOn : arrAddOn
      }))
    }
  }

  //Template for checked
  const even = (element) => element.id === data.id;

  return (
    <label className='add-on__block'>
          <input className='add-on__checkbox' type="checkbox" onChange={handleInput} checked={arrAddOn.some(even)} />
          <div className="add-on__info">
              <p className='add-on__title'>{data.name}</p>
              <p className="add-on__text">{data.desc}</p>
          </div>
          <div className="add-on__plan">{`+$${data.price}/${data.reduction}`}</div>
    </label>
  )
}

export default AddOn
