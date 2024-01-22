import React from "react";
import p from "../static/__.jpg";
import Services from "../Home/services";
import Clientreview from "../Home/client";
import Worktogether from "../Home/worktogether";
import {Link} from "react-router-dom"
export default function App(){
    return(
        <>
            <div className="first_component" style={{'backgroundImage' : `url(${p})`}}>
                <div className="first_1">
                    <h1><b>Company profile</b></h1>
                    <h6>here we will write the discription of the company and all what we offers</h6>
                    <span>
                        <button ><Link to={"/about"} style={{"textDecoration":"none", "color":"white"}}><b>Details</b></Link></button>
                    </span>
                </div> 
            </div>
            <Services/>
            <Clientreview/>
            <Worktogether/>
        </>
    )
}