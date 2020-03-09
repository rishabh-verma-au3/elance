import React from "react"
import {Redirect} from "react-router-dom"

export default function Logout(){

    return (
        <div>
            {
             localStorage.clear()
        }

        <Redirect to="/"/>
        </div>
    )
}