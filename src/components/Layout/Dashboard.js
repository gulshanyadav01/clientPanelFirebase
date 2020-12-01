import React from 'react'
import Client from "../Client/Client"
import Sidebar from "./Sidebar"

const  Dashboard =() =>{
    return (
        <div className = "flex m-8 ">
            <div className = "w-2/3">
            <Client />
            </div>
            <div className = "w-1/3">
            <Sidebar/>
            </div>
        </div>
    )
}

export default Dashboard
