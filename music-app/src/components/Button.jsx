import React from "react";

function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`text-black rounded-lg bg-gray-100 px-3 py-1 duration-150 hover:bg-white ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
