import React from "react";

export default function App() {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" >
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>  
                    <div>
                        {/* <a className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a> */}
                    </div>
                    
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    It is an finance project used for predicting your loan application eligibility
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <span className="text-reset">Loan applying</span>
                                </p>
                                <p>
                                    <span className="text-reset">loan status</span>
                                </p>
                                <p>
                                    <span className="text-reset">sign-in</span>
                                </p>
                                <p>
                                    <span className="text-reset">Login</span>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase ffw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <span className="text-reset">Home</span>
                                </p>
                                <p>
                                    <span className="text-reset">About</span>
                                </p>
                                <p>
                                    <span className="text-reset">Orders</span>
                                </p>
                                <p>
                                    <span className="text-reset">Help</span>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i>Rajsamand,Rajasthan,India(313301)</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    yuganshsoni8@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> 9351248488</p>
                                <p><i className="fas fa-print me-3"></i></p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.79)","color" : "white"}}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Loan_Pred.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}