import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged } from'firebase/auth'
import { auth } from "../lib/firebase";

export const MyContext = createContext();




export const ContextProvider = ({children})=>{
    const [userInput, setuserInput] = useState();
   const [responseData, setResponseData] = useState();
   const [contentLoading, setContentLoading ] = useState(null);
   const [user, setUser] = useState(null);

useEffect(()=>{


    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> setUser(currentUser));
       return () => unsubscribe();
},[user]);

const ContextValue ={
        responseData, setResponseData,
        userInput, setuserInput,
        contentLoading, setContentLoading,
        user, setUser,
    }

    return(
        <MyContext.Provider value={ContextValue}>
            {children}
        </MyContext.Provider>
    )
    
}

export const useContexts =()=>{

    let cntxt = useContext(MyContext);
    return cntxt;
   
}

