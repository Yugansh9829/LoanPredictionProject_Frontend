import React from "react";
import img from "../static/services.jpg";
export default function App(){
    return(
        <>
            <div className="fourth_component">
                <div className="fourth_1">
                    <h1>LET'S WORK TOGETHER</h1>
                <img src={img} className="images_" alt="error occured"></img>
                    
                </div>
                <div className="fourth_2">
                    <div className="fourth_2_1 first123">
                        <h1>Mailing Address</h1>
                        <span>Nathdwara, Rajsamand, Rajasthan(313301)</span>
                    </div>
                    <div className="fourth_2_1  first123">
                        <h1>Phone Number</h1>
                        <span>9351248488</span>
                    </div>
                    <div className="fourth_2_1  first123">
                        <h1>E-Mail Address</h1>
                        <span>yuganshsoni8@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}