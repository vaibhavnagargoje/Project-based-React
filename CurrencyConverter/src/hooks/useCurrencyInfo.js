import { useEffect, useState } from "react";

function useCurrencyInfo(currencyCode){
    const [data,setData]=useState({});
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyCode}.json`)
        .then(()=> res.json())
        .then((res)=>setData(res[currencyCode]))
        console.log(data);
    }, [currencyCode])
    return data
}




export default useCurrencyInfo;


