import { useEffect, useState } from "react";

function useWeatherInfo({ latitude, longitude }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (latitude && longitude) {
            fetch(
                `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}`
            )
                .then((res) => res.json())
                .then((res) => setData(res || null))
                .catch((e) => console.log(e));
        }
    }, [latitude, longitude]);

    return data;
}

export default useWeatherInfo;
