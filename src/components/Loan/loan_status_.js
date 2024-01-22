import React from "react";
import success from "../static/success.jpg";
import failure from "../static/failure.jpg";


export default function App(props){
    return(
        <>{props.status?
            <div className="loan_status_">
            <div className="loan_status_1" style={{"backgroundImage":`url(${success})`}}></div>
            <div className="loan_status_2">
                <h1>loan status</h1>
                <h5>you are eligible for loan</h5>
            </div>
        </div>
        :
        <div className="loan_status_">
            <div className="loan_status_1" style={{"backgroundImage":`url(${failure})`}}></div>
            <div className="loan_status_2">
                <h1>loan status</h1>
                <h5>you are not eligible for loan</h5>
            </div>
        </div>}
            
        </>
    )
}