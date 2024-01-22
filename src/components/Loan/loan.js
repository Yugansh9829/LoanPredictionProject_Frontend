import React,{useState} from "react";
import {BASE_URL} from "../helper.js";
import { useNavigate } from "react-router-dom";

export default function App(props){
    const nvg = useNavigate();
    const email = props.email;
    const [Gender,SetGender] = useState("");
    const [Married,SetMarried] = useState("");
    const [Dependents,Setnod] = useState(0);
    const [education,Setedu] = useState("");
    const [Self_Employed,SetSe] = useState("");
    const [ApplicantIncome,SetaI] = useState(0);
    const [CoapplicantIncome,SetCi] = useState(0);
    const [LoanAmount,SetLa] = useState(0);
    const [Loan_Amount_Term,SetLat] = useState(0);
    const [Credit_History,Setch] = useState(0);
    const [Property_Area,SetPa] = useState(0);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const addDetails = {email,Gender,Married,Dependents,education,Self_Employed,ApplicantIncome,CoapplicantIncome,LoanAmount,Loan_Amount_Term,Credit_History,Property_Area};
        const res_ = await fetch(`${BASE_URL}/loan/${email}`);
        const res = await res_.json();
        console.log(res);

        if(res.length===0){
            const response = await fetch(`${BASE_URL}/loan`,
            {
                method : "POST",
                body : JSON.stringify(addDetails),
                headers : {
                    "Content-Type" : "application/json",
                }
            });
            const result = await response.json();

            if(!response.ok){
                console.log("error occured while sending loan data from frontend to backend :\n", result.error)
            }if(response.ok){
                console.log(result);
                alert("You have successfully applied for loan");
                nvg('/');
            }
        }
        
        else{
            alert("You Have already applied for loan");
            nvg('/');
        }
    }
    return (
        <>
        {props.email===""?  
        nvg('/signup')
        :
        props.loan_applied===1?<h1>your have already applied for loan</h1>:
        <>
                <div className="loan_heading">
                <h3><b>Please Fill All Details in below form to apply for the loan</b></h3>
            </div>
            <div className="loan_form">
            <form onSubmit={handleSubmit}>
                <h5>Enter your Gender</h5>
                <input type="text" value={Gender} onChange={(e)=>SetGender(e.target.value)}></input>
                <h5>Enter your Married Status</h5>
                <input type="text" value={Married} onChange={(e)=>SetMarried(e.target.value)}></input>
                <h5>Enter your Number of Dependents</h5>
                <input type="number" value={Dependents} onChange={(e)=>Setnod(e.target.value)}></input>
                <h5>Enter your Education</h5>
                <input type="text" value={education} onChange={(e)=>Setedu(e.target.value)}></input>
                <h5>Are your self-Employed</h5>
                <input type="text" value={Self_Employed} onChange={(e)=>SetSe(e.target.value)}></input>
                <h5>Enter your Annual Income</h5>
                <input type="number" value={ApplicantIncome} onChange={(e)=>SetaI(e.target.value)}></input>
                <h5>Enter your Guranter Annual Income</h5>
                <input type="number" value={CoapplicantIncome} onChange={(e)=>SetCi(e.target.value)}></input>
                <h5>Enter Loan amount according to your requirements</h5>
                <input type="number" value={LoanAmount} onChange={(e)=>SetLa(e.target.value)}></input>
                <h5>Enter Loan term</h5>
                <input type="number" value={Loan_Amount_Term} onChange={(e)=>SetLat(e.target.value)}></input>
                <h5>Enter value of your Credit History </h5>
                <input type="number" value={Credit_History} onChange={(e)=>Setch(e.target.value)}></input>
                <h5>Enter amount of total assets</h5>
                <input type="string" value={Property_Area} onChange={(e)=>SetPa(e.target.value)}></input>
                <br></br>
                <p>
                    <button type="submit">SUBMIT</button>
                </p>
            </form>
            </div>
        </>
        }
            
        </>
    )
}