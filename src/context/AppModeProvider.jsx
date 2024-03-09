import React, { createContext, useContext, useState } from "react";

const AppModeProviderContext = createContext({});

export const AppModeProviderWrapper = (props) => {
    const [appMode, setAppMode] = useState(true);

    const handleToggleAppMode = () => {
        setAppMode(!appMode);
    }

    return <AppModeProviderContext.Provider
        value={{
            appMode,
            handleToggleAppMode
        }}
    >
        {props.children}
    </AppModeProviderContext.Provider>
};

export const AppModeProvider = () => useContext(AppModeProviderContext);