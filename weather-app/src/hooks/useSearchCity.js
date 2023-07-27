import { useEffect, useState } from "react";

function useSearchCity(query) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(
                `https://geocoding-api.open-meteo.com/v1/search?&count=5&language=en&format=json&name=${query}`
            )
                .then((res) => res.json())
                .then((res) => setData(res.results || []))
                .catch((e) => console.log(e));
        }
    }, [query]);

    return data;
}

export default useSearchCity;
