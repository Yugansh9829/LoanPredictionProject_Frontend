import React from "react";
import service from "../static/services.jpg";

export default function App(){
    return(
        <div className="second_component">
                <div className="second_1">
                    <div className="second_1_1">
                        <h1><b>OUR SERVICES</b></h1>
                    </div>
                    <img src={service} alt="not available" className="images_"></img>
                </div>
                <div className="second_2">
                    <div className="second_2_1 first123">
                        <h2>Tax Preparation</h2>
                        <p>here we describe the transaction and their importance in tax</p>
                    </div>
                    <div className="second_2_1 first123">
                        <h2>Tax Preparation</h2>
                        <p>here we describe the transaction and their importance in tax</p>
                    </div>
                    <div className="second_2_1 first123">
                        <h2>Tax Preparation</h2>
                        <p>here we describe the transaction and their importance in tax</p>
                    </div>
                </div>
        </div>    
    )
}