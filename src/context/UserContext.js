import React, { createContext, useState } from 'react';

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserProvider = ({children}) => {
    const [useDetails, setUserDetails ] = useState({
        username:'Ramesh',
    });
  return (
    <UserContext.Provider value={useDetails}>
        <UserDispatchContext.Provider value={setUserDetails}>
            {children}
        </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext, UserDispatchContext};