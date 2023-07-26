import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
    const [formId, setFormId] = useState("");

    const languages = [
        "English",
        "Hindi",
        "Marathi",
        "Gujrati",
        "Tamil",
        "Telugu",
        "Kannada",
        "Bangali",
        "Chinese",
        "Japanese",
        "Russian",
    ];

    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <div className="px-4 max-w-2xl w-full">
                <div className="flex justify-center mb-12">
                    <img src="/colored-logo.png" alt="Logo" style={{ width: "272px" }} />
                </div>

                <div className="relative">
                    <SearchBar getFormId={setFormId} searchIcon />
                </div>

                <div className="mt-8 p-2 w-full flex flex-wrap justify-center gap-6">
                    <button type="submit" form={formId} className="bg-gray-100 p-2 rounded">
                        Google Search
                    </button>
                    <button className="bg-gray-100 p-2 rounded">I'm Feeling Lucky</button>
                </div>

                <div className="mt-8 flex text-sm">
                    <p className="shrink-0">Google offered in:&nbsp;</p>
                    <div className="w-full">
                        {languages.map((lang) => (
                            <span
                                key={lang}
                                className="inline-block mx-1 text-blue-800 hover:underline cursor-pointer"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
