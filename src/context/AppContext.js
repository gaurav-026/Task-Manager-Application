//create context

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();


function AppContextProvider({children}){
    const [data, setData] = useState([]);

    const addTask = (task)=>{
        setData([...data, task]);
    }

    //verify 
    useEffect(()=>{
        console.log("Appprovider data is =>  ", data);
    }, [data])

    return <AppContext.Provider value = {{data, addTask}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;