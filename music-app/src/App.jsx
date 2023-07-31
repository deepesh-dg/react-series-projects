import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    return (
        <>
            <div className="flex flex-col gap-y-4 p-4 min-h-screen pb-[136px]">
                <div className="flex-1 h-screen bg-white rounded-xl">
                    <MusicList />
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0 bg-gray-200 py-4 rounded-t-2xl px-4 overflow-auto shadow-md">
                <MusicPlayer />
            </div>
        </>
    );
}

export default App;
