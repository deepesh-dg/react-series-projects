import React from "react";

function SearchResult({ result }) {
    return (
        <div className="relative">
            <a href={result.link} className="group">
                <div className="flex gap-x-3 items-center mb-1">
                    <div className="w-7 h-7 overflow-hidden rounded-full flex items-center justify-center bg-gray-200 shrink-0">
                        <img
                            src={
                                result.pagemap?.cse_thumbnail &&
                                result.pagemap?.cse_thumbnail.length > 0 &&
                                result.pagemap?.cse_thumbnail[0]?.src
                            }
                            alt="Thumbnail"
                            className="w-full"
                        />
                    </div>
                    <div className="leading-5">
                        <h2>
                            {(result.pagemap?.metatags &&
                                result.pagemap?.metatags.length > 0 &&
                                result.pagemap?.metatags[0]["og:title"]) ||
                                result.title}
                        </h2>
                        <p className="text-sm opacity-80">{result.link}</p>
                    </div>
                </div>
                <div className="text-xl text-blue-700 group-hover:underline">{result.title}</div>
            </a>
            <p className="opacity-80 text-sm">{result.snippet}</p>
        </div>
    );
}

export default SearchResult;
