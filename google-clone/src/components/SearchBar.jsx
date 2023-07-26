import React, { useState, useEffect, useId } from "react";
import SearchIcon from "./SearchIcon";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar({
    placeholder = "Search Google or type a URL",
    getFormId,
    searchIcon = false,
    submitBtn = false,
    className = "",
}) {
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const formId = useId();

    const search = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.length > 0) {
            navigate({
                pathname: "/search",
                search: `q=${searchQuery}`,
            });
        }
    };

    useEffect(() => {
        if (query !== null) {
            setSearchQuery(query);
        }
    }, [query]);

    useEffect(() => {
        if (getFormId) getFormId(formId);
    }, [getFormId, formId]);

    return (
        <form
            id={formId}
            onSubmit={search}
            className="relative w-full flex items-center border border-gray-200 hover:shadow-lg rounded-full px-3 py-2.5"
        >
            {searchIcon && (
                <span className="inline-block w-6 text-gray-400 shrink-0 mr-1.5">
                    <SearchIcon />
                </span>
            )}
            <input
                value={searchQuery}
                type="text"
                autoComplete="off"
                className={`w-full bg-transparent outline-none ${className}`}
                placeholder={placeholder}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {submitBtn && (
                <span className="inline-flex w-6 shrink-0 mr-1.5 text-blue-500">
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </span>
            )}
        </form>
    );
}

export default SearchBar;
