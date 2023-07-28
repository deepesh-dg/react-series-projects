import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    return (
        <div className="flex flex-wrap px-4 py-2 h-screen">
            <div className="w-1/2 px-2">
                <MusicPlayer />
            </div>
            <div className="w-1/2 h-full px-2">
                <MusicList />
            </div>
        </div>
    );
}

export default App;
