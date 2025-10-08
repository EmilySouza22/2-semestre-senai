import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [produto, setProduto] = useState('Mouse')
    const [produtos, setProdutos] = useState([{nome:'teclado'}, {nome:'monitor'}])

    return(
        <GlobalContext.Provider value={{produto, setProduto, produtos}}>
            {children}
        </GlobalContext.Provider>
    )
} 