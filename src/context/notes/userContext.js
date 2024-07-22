import React, { createContext, useState, useContext } from 'react';

// Create UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
