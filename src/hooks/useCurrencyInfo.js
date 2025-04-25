import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            const result = await res.json();
            console.log("Fetched currency info:", result[currency]);
            setData(result[currency]);
        } catch (err) {
            console.error("Failed to fetch currency data:", err);
            setData({});
        }
    };
    fetchData();
}, [currency]);


    return data;
}

export default useCurrencyInfo;
