import React, { useEffect, useState } from "react";
import useSearchCity from "../hooks/useSearchCity";
import { setCoordinates } from "../store/weatherInfoSlice";
import { useDispatch } from "react-redux";

function CitySelect({ setOpen }) {
    const [search, setSearch] = useState("");

    const citySuggestions = useSearchCity(search);

    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === "escape") setOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [setOpen]);

    return (
        <div className="absolute top-[105%] left-0 w-52 rounded-lg bg-white/70 border border-white py-2 text-black">
            <div className="px-1">
                <input
                    className="bg-white rounded-lg w-full py-1 px-2 outline-none"
                    type="text"
                    placeholder="Search City..."
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {citySuggestions.length > 0 && (
                <ul className="mt-2">
                    {citySuggestions.map((city) => (
                        <li
                            key={city.id}
                            className="px-3 py-1 duration-150 hover:bg-white/50 border-b border-gray-100 last:border-none cursor-pointer"
                            onClick={() => {
                                dispatch(setCoordinates(city));
                                setOpen(false);
                            }}
                        >
                            {city.name}, {city.admin4 && city.admin4 + ", "}
                            {city.admin3 && city.admin3 + ", "}
                            {city.admin2 && city.admin2 + ", "}
                            {city.admin1 && city.admin1 + ", "}
                            {city.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CitySelect;
