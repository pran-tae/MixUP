import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Upload from "./pages/UploadPage";
import Transition from "./pages/TransitionPage";
import Download from "./pages/DownloadPage";
import SoundCloudDownload from "./pages/SoundcloudDownloadPage";
import ChooseUpload from "./pages/ChooseUploadPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-upload" element={<ChooseUpload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/soundcloud-download" element={<SoundCloudDownload />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
