import React from "react";

export default function App(){
    return(
        <>
    <section id="company" className="container">
    <h2 className="fadeIn">About Our Company</h2>
    <p className="fadeIn">Welcome to LoanPro, your reliable partner in financial solutions. We specialize in providing flexible and secure loans to meet your unique needs.</p>

    <h2 id="mission" className="fadeIn">Our Mission</h2>
    <p className="fadeIn">At LoanPro, our mission is to empower individuals and businesses by offering reliable and affordable financial solutions. We strive to make the loan application process simple and transparent.</p>

    <h2 className="fadeIn">Financial Information</h2>
    <div className="financial-info">
      <div className="fadeIn">
        <h3>Competitive Interest Rates</h3>
        <p>Our competitive interest rates ensure that you get the best value for your money. Explore our loan options and find a rate that suits your financial goals.</p>
      </div>
      <div className="fadeIn">
        <h3>Diverse Loan Products</h3>
        <p>From personal loans to business financing, we offer a diverse range of loan products. Choose the one that aligns with your needs and aspirations.</p>
      </div>
      <div className="fadeIn">
        <h3>Security & Trust</h3>
        <p>Your financial security is our top priority. We employ state-of-the-art security measures to safeguard your information, and our experienced team is committed to earning and maintaining your trust.</p>
      </div>
      <div className="fadeIn">
        <h3>Dedicated Customer Support</h3>
        <p>Our customer support team is available to assist you at every step. Whether you have questions about the application process or need help with your existing loan, we're here for you.</p>
      </div>
    </div>
  </section>
        </>
    )
}