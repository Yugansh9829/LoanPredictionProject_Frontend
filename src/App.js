import React, {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home/home";
import About from "./components/about/about";
import Loan from "./components/Loan/loan";
import LoanStatus from "./components/Loan/loan_status";
import Signup from "./components/Signup/signup";
import Signin from "./components/Signup/login";
import Shownavbar from "./components/shownavbar";
import Loanstatus from "./components/Loan/loan_status_";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const [email,setEmail] = useState("");
  const [sign,setsign] = useState(0);
  const [status,setstatus]= useState();
    return (
      <>
        
        <BrowserRouter>
        <Shownavbar>
          <Header signup={sign}/>
        </Shownavbar>
        
        <Routes>
          <Route path="/" element={<Home/> }> </Route>
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/loan" element={<Loan email={email}/>}> </Route>
          <Route path="/loan_status" element={<LoanStatus email={email} setstatus={setstatus}/>}></Route>
          <Route path="/signup" element={<Signup setEmail={setEmail} setsign={setsign}/>}></Route>
          <Route path="/signin" element={<Signin setEmail={setEmail} setsign={setsign}/>}></Route>
          <Route path="/loan_status_" element={<Loanstatus status={status}/>}></Route>
        </Routes>

        <Shownavbar>
        <Footer/>
        </Shownavbar>

        </BrowserRouter>
        
      </>
    );
  
}

export default App;
