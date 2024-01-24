import React from 'react';

interface AppContextType {
    favorite: any[];
    products: any[];
    cartProducts: any[];
}

const AppContext = React.createContext<AppContextType>({} as AppContextType);

export default AppContext;