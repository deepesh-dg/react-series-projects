import { useState, useEffect } from "react";
import constants from "../constants";

function useSearch(query) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (query) {
            setLoader(true);
            setError(null);
            fetch(`${constants.searchUrl}?cx=${constants.googleCXId}&key=${constants.googleKey}&q=${query}`)
                .then((res) => res.json())
                .then((data) => setData(data.items || []))
                .catch((e) => setError(e.error.message))
                .finally(() => setLoader(false));
        } else setData([]);
    }, [query]);

    return { data, error, loader };
}

export default useSearch;
