import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import useSearch from "./hooks/useSearch";
import SearchResult from "./components/SearchResult";

function Search() {
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const { data: searchResults } = useSearch(query);

    useEffect(() => {
        if (!query) navigate("/");
    }, [query, navigate]);

    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="block md:flex w-full items-center py-6">
                    <div className="md:block flex justify-center">
                        <Link to="/">
                            <img src="/colored-logo.png" alt="Logo" style={{ width: "92px" }} />
                        </Link>
                    </div>
                    <div className="relative md:ml-10 pt-2 md:pt-0 w-full max-w-3xl">
                        <SearchBar placeholder="" submitBtn />
                    </div>
                </div>
            </div>
            <hr />
            <div className="max-w-7xl mx-auto px-4">
                {searchResults.map((result) => (
                    <div key={result.link} className="max-w-2xl mt-6">
                        <SearchResult result={result} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
