import React, { useId } from "react";

function Select({ options, label, setValue, className = "", ...props }) {
    const id = useId();

    return (
        <div className="w-full">
            {label ? (
                <label htmlFor={id} className="mb-2 inline-block">
                    {label}
                </label>
            ) : null}
            <select
                {...props}
                id={id}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                onChange={(e) => setValue(e.target.value)}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
