import React, { createContext, useState, useContext } from 'react'
 
const UsersContext = createContext()
 
export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
 
    const addUser = item => {
        setUsers(prevUsers => [...prevUsers, { id: Date.now(), name: item }])
    }
 
    const removeUser = id => {
        setUsers(prevUsers => prevUsers.filter(n => n.id !== id))
    }

    const count = () =>{
        return users.length;
    }
 
    return (
        <UsersContext.Provider value={{ users, addUser, removeUser, count }}>
            {children}
        </UsersContext.Provider>
    )
}
 
export const useUsers = () => useContext(UsersContext)