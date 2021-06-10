import React from 'react'

const TabHeader = (props) => {
    return (
        <ul className="tabs-header">
            {
                props.data.map((item, index) => {
                    return <li key={index} className={(props.activeId === index ? 'active' : '')}>
                        <a onClick={()=>props.setActiveTab(index)} ><span>{item.name}</span></a>
                    </li>
                })
            }
        </ul>
    )
}

export default TabHeader
