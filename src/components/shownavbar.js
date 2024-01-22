import React, {useState, useEffect}from "react";
import { useLocation } from "react-router-dom";

export default function App({children}){
    const location = useLocation();
    const [Shownavbar, setshownavbar] = useState(false);
    useEffect(()=>{
    console.log(location);

        if(location.pathname==='/signup'){
            setshownavbar(false);
        }else{
            setshownavbar(true);
        }
    },[location])

    return(
        <>
            {Shownavbar && children}
        </>
    )
}