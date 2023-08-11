import React, { useId } from "react";

function Input({
    type = "text",
    setValue,
    label,
    placeholder,
    className = "",
    inputClassName = "",
    ...props
}) {
    const id = useId();

    return (
        <div className={`${className}`}>
            {label ? (
                <label htmlFor={id} className="mb-2 inline-block">
                    {label}
                </label>
            ) : null}
            <input
                type={type}
                id={id}
                onChange={(e) => setValue(e.target.value)}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${inputClassName}`}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}

export default Input;
