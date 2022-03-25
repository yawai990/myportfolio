import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const MyContext = ({ children }) => {
    const [model, setModel] = useState(false);

    const PlayModel = () => setModel(!model);
    return <AppContext.Provider value={{
        model, setModel, PlayModel
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, MyContext };