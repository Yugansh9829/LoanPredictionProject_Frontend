import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../helper.js";


export default function App(props) {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const nvg = useNavigate();

    function handle_register(){
        nvg('/signin');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email==="" || password===""){
            alert("please enter values in all fields");
            return;
        }
        try{
            const response = await fetch(`${BASE_URL}/${email}`);
            const result = await response.json();
            if (!response.ok) {
                console.log("Plese enter correct email and password");
            }
            if (response.ok) {
                if(result===null){
                    alert("please enter correct email address and password");
                    return;
                }
                console.log((result[0].email) === email)
                console.log(result[0].password === String(password));
                if (result[0].email === email && result[0].password === password) {
                    props.setEmail(email);
                    console.log("successfully signed in");
                    props.setsign(1);
                    nvg('/');
                }else{
                    alert("please enter correct password");
                }
            }
        }catch(err){
            alert("enter a valid email or first login");
        }
        

    }
    return (
        <>
            {/* <div>
                <h1>Welcome to our financial page</h1>
                <h3>Please sign up using your email and password</h3>
                <form onSubmit={handleSubmit}>
                    <label>Enter your Email</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
                    <label>Enter your password</label>
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
                    <button type="submit">Submit</button>
                </form>
            </div> */}
            <section className="vh-100">
                <div className="container-fluid h-custom login-page" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample error occured"></img>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg" value={email} onChange={(e)=>setemail(e.target.value)}
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg" value={password} onChange={(e)=>setpassword(e.target.value)}placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <a href="#!" className="text-body">Forgot password?</a> */}
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <span className="link-danger" onClick={handle_register}>Register</span></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}