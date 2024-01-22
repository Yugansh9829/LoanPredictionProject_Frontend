import React from "react";
import { useNavigate } from "react-router-dom";



export default function App(props) {
    const nvg = useNavigate();
    function Click_handle(){
        console.log('clicked');
        if(props.signup!==0){
            nvg('/loan');
        }else{
            nvg('/signup');
        }
    }
    function handle_home(){
        nvg('/');
    }
    function handle_loan_status(){
        nvg('/loan_status');
    }
    function handle_signup(){
        nvg('/signup');
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand" onClick={handle_home}><b>Finance Project</b></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav _here">
                        <li className="nav-item">
                            <span className="nav-link active" aria-current="page" onClick={handle_home}>Home</span>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={Click_handle}> Loan Applying </button>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" onClick={handle_loan_status}>Loan Status</span>
                        </li>
                        {props.signup===0? <li className="nav-item">
                            <a className="nav-link" onClick={handle_signup}>SignUp</a>
                        </li>: ""}
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}