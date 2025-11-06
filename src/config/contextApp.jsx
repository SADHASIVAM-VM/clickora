import { createContext, useContext, useState } from "react";


export const MyContext = createContext();




export const ContextProvider = ({children})=>{
    const [userInput, setuserInput] = useState();
   const [responseData, setResponseData] = useState();
   const [contentLoading, setContentLoading ] = useState(null);



const ContextValue ={
        responseData, setResponseData,
        userInput, setuserInput,
        contentLoading, setContentLoading,
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

