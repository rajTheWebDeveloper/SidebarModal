import React, { useState } from 'react'
import { createContext,useContext } from 'react'


let SMContext=createContext("")
const SMProvider = ({children}) => {

    let [sidebarStatus,setSidebarStatus]=useState(false)
    let [modalStatus,setModalStatus]=useState(false)

    let openSidebar=()=>
    {
        setSidebarStatus(true)
    }
    let closeSidebar=()=>
    {
        setSidebarStatus(false)
    }
    let openModal=()=>
    {
        setModalStatus(true)
    }
    let closeModal=()=>
    {
        setModalStatus(false)
    }
    
    return <SMContext.Provider value={{sidebarStatus,modalStatus,openSidebar,closeSidebar,openModal,closeModal}}>
        {children}
    </SMContext.Provider>
}




export {SMContext,SMProvider}