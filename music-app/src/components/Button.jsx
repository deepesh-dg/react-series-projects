import React from "react";

function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`rounded-lg bg-gray-50 px-3 py-1 duration-150 hover:bg-gray-200 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
