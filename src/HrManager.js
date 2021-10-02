import React, { useState } from 'react'

const HrManager = ({para}) => {
 const[showLogout,setShowlogout] = useState(false)

    return (
        <>
            <div className="hr_container">
            <div className="header">
            <div className="btn"><i class="fas fa-user-circle" onClick={()=>setShowlogout(!showLogout)}> </i>
            </div>
            {showLogout?<div><button>Log out</button></div> : null}
            </div>
            <div className="para"><p>{para}</p></div>
            </div>
        </>
    )
}

export default HrManager
