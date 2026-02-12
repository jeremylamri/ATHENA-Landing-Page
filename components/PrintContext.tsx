import React, { createContext, useContext, ReactNode } from 'react';

interface PrintContextType {
    isPrintMode: boolean;
}

const PrintContext = createContext<PrintContextType>({ isPrintMode: false });

export const usePrintMode = () => useContext(PrintContext);

export const PrintProvider: React.FC<{ children: ReactNode; isPrintMode?: boolean }> = ({
    children,
    isPrintMode = false
}) => {
    return (
        <PrintContext.Provider value={{ isPrintMode }}>
            {children}
        </PrintContext.Provider>
    );
};
