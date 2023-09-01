import React from 'react'

const SidebarItem = ({ id, text, classNameItem, classNameSwitch, name, changeStep }) => {
    
    const jumpToStep = () => {
        changeStep(id)
    }

    return (
        <li className={classNameItem}>
            <a href="!#" className={classNameSwitch} onClick={jumpToStep} >{text}</a>
            <div className="step" onClick={jumpToStep}>
                <p className='step__title'>Step {text}</p>
                <p className='step__desc'>{name}</p>
            </div>
        </li>
    )
}
export default SidebarItem
