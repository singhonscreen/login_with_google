import React from 'react'
import HrManager from './HrManager';
import Common from './Common';
const Manager = () => {
    return (
        <>
        <div className="flex_container">
        <Common />
        <HrManager para ="This is Manager page" />
        </div>
        </>
    )
}

export default Manager
