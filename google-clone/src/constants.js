const constants = {
    googleKey: String(process.env.REACT_APP_GOOGLE_API_KEY),
    googleCXId: String(process.env.REACT_APP_GOOGLE_CX_ID),
    searchUrl: "https://www.googleapis.com/customsearch/v1",
    searchSuggestionsUrl: "http://suggestqueries.google.com/complete/search?&client=firefox&ds=google",
};

export default constants;
