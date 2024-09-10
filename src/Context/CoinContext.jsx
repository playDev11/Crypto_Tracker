import { createContext, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const [allCoin, setAllCoin]= useState([]);
    const [currency, setCurrency]= useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async ()=>{
        
    }

    const CointextValue = {

    }
    return(
        <CoinContext.Provider value={CointextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;