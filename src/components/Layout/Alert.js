import React from 'react'


export default function Alert(props) {
    const { message, messageType } = props; 



    return (
        <div className = {messageType === "error" ? "bg-green-400": "bg-red:400"}>
            {message}
        </div>
    )
}
