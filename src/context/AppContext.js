//create context

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();


function AppContextProvider({children}){
    const [data, setData] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);

    const addTask = (task)=>{
        setData([...data, task]);
    }
    const taskAnalyse = (updatedData, doneTask)=>{
        setCompletedTask([...completedTask, doneTask]);
        setData(updatedData);

    }

    //verify 
    useEffect(()=>{
        console.log("App provider data is => ", data);
        console.log("Completed task data is : ", completedTask);
    }, [data, completedTask])

    return <AppContext.Provider value = {{data,setData, completedTask,setCompletedTask, addTask, taskAnalyse}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;