import React from "react";
import service from "../static/client.jpg";

export default function App(){
    return(
        <>
            <div className="third_component">
                <div className="third_1">
                    <h1><b>CLIENT REVIEW SECTION</b></h1>
                    <p>write the complete description about the client reviews with all details</p>
                </div>
                <div className="third_2">
                    <div className="third_2_1">
                        <img alt="error in loading" src={service}></img>
                        <h6>Name_1</h6>
                    </div>
                    <div className="third_2_1">
                        <img alt="error in loading" src={service}></img>
                        <h6>Name_2</h6>
                    </div>
                    <div className="third_2_1">
                        <img alt="error in loading" src={service}></img>
                        <h6>Name_3</h6>
                    </div>
                </div>

            </div>
        </>
    )
}