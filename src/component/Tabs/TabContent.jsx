import React from 'react'

const TabContent = (props) => {
    return (
        <div className="tabs-content">
            {
                props.data.map((item, index) => (
                    <div key={index} className={'tabs-textItem ' + (props.activeId === index ? 'show' : '')} >
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TabContent
