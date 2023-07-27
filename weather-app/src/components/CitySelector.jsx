import React, { useState } from "react";
import { useSelector } from "react-redux";
import CitySelect from "./CitySelect";

function CitySelector() {
    const coordinates = useSelector((state) => state.weatherInfo.coordinates);

    const [open, setOpen] = useState(false);

    return (
        <div className="flex">
            <div className="relative">
                <button
                    className={`px-4 py-1.5 border duration-200 bg-white/20 rounded-lg ${
                        open ? "border-white" : "border-transparent"
                    }`}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {coordinates.name}
                </button>
                {open && <CitySelect setOpen={setOpen} />}
            </div>
        </div>
    );
}

export default CitySelector;
