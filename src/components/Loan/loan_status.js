import React, { useEffect, useState} from "react";
import  {useNavigate} from "react-router-dom";
import {BASE_URL} from "../helper.js";

export default function App(props){
        const nvg = useNavigate();
        const[data,setData]=useState();

        async function get_data(){
        if(!props.email){
            return;
        }
        const res = await fetch(`${BASE_URL}/loan/${props.email}`);
        const result = await res.json() ;
            if(res.ok){
                console.log("result:", result[0]);
                setData(result);
                try{
                    delete result[0]._id;
                    delete result[0].__v;
                    delete result[0].email;
                    const response_1 = await fetch(`https://ml-backend-1e40.onrender.com/predict/${props.email}`);
                    const result__ =  await response_1.json();
                    if(response_1.ok){
                        console.log("prediction is successfull and it is : \n" )
                        console.log(result__[0]);
                        props.setstatus(result__[0]);
                    }if(!response_1.ok){
                        console.log("some error occured while prediction data from backend: \n", result__);
                    }
                }
                catch(err){
                    console.log("error while predicting for application : \n ",err.message);
                }
                
            }
            if(!res.ok){
                console.log("some error occured at loan_status :\n" , res.err);  
            }
        }

    useEffect(()=>{
        get_data();
    },[])
    // console.log(data);

    const handle_status = ()=>{
        nvg("/loan_status_");
    }

    return(
        <>
            {!data? <h1>Please Signin to fetch your loan details</h1> :
            <div className="loan_d">
                <h1>You have already applied for loan and status is as follow</h1>
                <div className="loan_details">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={"2"}>USER APPLICATION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>E-Mail </td>
                            <td>{props.email}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{data[0].Gender}</td>
                        </tr>
                        <tr>
                            <td>Your Married Status</td>
                            <td>{data[0].Married}</td>
                        </tr>
                        <tr>
                            <td>Number of Dependents</td>
                            <td>{data[0].Dependents}</td>
                        </tr>
                        <tr>
                            <td>Education Status</td>
                            <td>{data[0].education}</td>
                        </tr>
                        <tr>
                            <td>Self Employment status</td>
                            <td>{data[0].Self_Employed}</td>
                        </tr>
                        <tr>
                            <td>Your annual Income</td>
                            <td>{data[0].ApplicantIncome}</td>
                        </tr>
                        <tr>
                            <td>Income of your Guranteer</td>
                            <td>{data[0].CoapplicantIncome}</td>
                        </tr>
                        <tr>
                            <td>Loan amount</td>
                            <td>{data[0].LoanAmount}</td>
                        </tr>
                        <tr>
                            <td>Loan amount Term</td>
                            <td>{data[0].Loan_Amount_Term}</td>
                        </tr>
                        <tr>
                            <td>Your Credit History</td>
                            <td>{data[0].Credit_History}</td>
                        </tr>
                        <tr>
                            <td>your property area</td>
                            <td>{data[0].Property_Area}</td>
                        </tr>
                        <tr>
                            <td>Application Status</td>
                            <td onClick={handle_status}>Click here to get your loan status</td>
                        </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>}
        </>
    )
}