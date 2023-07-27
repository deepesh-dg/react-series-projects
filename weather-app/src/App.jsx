import { useCallback } from "react";
import BackgroundImage from "./assets/sky-blue-bg.jpg";
import CitySelector from "./components/CitySelector";
import useWeatherInfo from "./hooks/useWeatherInfo";
import store from "./store/store";
import { useSelector } from "react-redux";

// For syncing last used coordinates to localStorage
store.subscribe(() => {
    localStorage.setItem("coordinates", JSON.stringify(store.getState().weatherInfo.coordinates));
});

function App() {
    const { latitude, longitude } = useSelector((state) => state.weatherInfo.coordinates);

    const fetchWeatherInfo = useWeatherInfo({ latitude, longitude });

    const weatherInfo = fetchWeatherInfo?.current_weather;

    const weatherDescription = useCallback((code) => {
        let description = "";

        switch (code) {
            case 0:
                description = "Clear Sky";
                break;
            case 1:
            case 2:
            case 3:
                description = "Mainly clear, partly cloudy, and overcast";
                break;
            case 45:
            case 48:
                description = "Fog and depositing rime fog";
                break;
            case 51:
            case 53:
            case 55:
                description = "Drizzle: Light, moderate, and dense intensity";
                break;
            case 56:
            case 57:
                description = "Freezing Drizzle: Light and dense intensity";
                break;
            case 61:
            case 63:
            case 65:
                description = "Rain: Slight, moderate and heavy intensity";
                break;
            case 66:
            case 67:
                description = "Freezing Rain: Light and heavy intensity";
                break;
            case 71:
            case 73:
            case 75:
                description = "Snow fall: Slight, moderate, and heavy intensity";
                break;
            case 77:
                description = "Snow grains";
                break;
            case 80:
            case 81:
            case 82:
                description = "Rain showers: Slight, moderate, and violent";
                break;
            case 85:
            case 86:
                description = "Snow showers slight and heavy";
                break;
            case 95:
                description = "	Thunderstorm: Slight or moderate";
                break;
            case 96:
            case 99:
                description = "	Thunderstorm with slight and heavy hail";
                break;
            default:
                description = "No Info";
                break;
        }

        return description;
    }, []);

    const windDirection = useCallback((directionCode) => {
        let direction = "";

        if ((directionCode >= 0 && directionCode <= 22) || (directionCode >= 338 && directionCode <= 360)) {
            direction = "North";
        } else if (directionCode >= 23 && directionCode <= 67) {
            direction = "North East";
        } else if (directionCode >= 68 && directionCode <= 112) {
            direction = "East";
        } else if (directionCode >= 113 && directionCode <= 157) {
            direction = "South East";
        } else if (directionCode >= 158 && directionCode <= 202) {
            direction = "South";
        } else if (directionCode >= 203 && directionCode <= 247) {
            direction = "South West";
        } else if (directionCode >= 248 && directionCode <= 292) {
            direction = "West";
        } else if (directionCode >= 292 && directionCode <= 337) {
            direction = "North West";
        }

        return direction;
    }, []);

    return (
        <div
            className="w-full min-h-screen bg-cover bg-no-repeat text-white"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full max-w-6xl mx-auto p-5 flex flex-wrap gap-y-8">
                <div className="w-full flex justify-center">
                    <CitySelector />
                </div>
                {weatherInfo && (
                    <>
                        <div className="w-full flex justify-center">
                            <div className="w-full">
                                <h2 className="text-6xl mb-3 text-center">
                                    {weatherInfo.temperature} C&deg;
                                </h2>
                                <table className="w-full flex justify-center">
                                    <tbody>
                                        <tr>
                                            <td className="font-bold p-1">Day Status</td>
                                            <td className="p-1">
                                                : {weatherInfo.is_day === 1 ? "Day" : "Night"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold p-1">Weather Info</td>
                                            <td className="p-1">
                                                : {weatherDescription(weatherInfo.weathercode)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold p-1">Wind Direction</td>
                                            <td className="p-1">
                                                : {windDirection(weatherInfo.winddirection)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold p-1">Wind Speed</td>
                                            <td className="p-1">: {weatherInfo.windspeed} kmph</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
