import React, { useState } from 'react'
import Player from '../Player/Player';
import Team from '../Team/Team';
import TabContent from './TabContent';
import TabHeader from './TabHeader';
import './Tabs.css'

const Tabs = () => {

    const data = [
        {
            name: 'Team',
            text: <Team />
        },
        {
            name: 'Player',
            text: <Player />
        },
    ];

    const [activeTab, setActiveTab] = useState(0)



    return (
        <>
            <div className="content">
                <TabHeader data={data}
                    setActiveTab={setActiveTab}
                    activeId={activeTab} />
                <TabContent data={data}
                    activeId={activeTab} />
            </div>
        </>
    )
}

export default Tabs
