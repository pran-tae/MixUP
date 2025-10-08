import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Upload from "./pages/UploadPage";
import Transition from "./pages/TransitionPage"; 
import Download from "./pages/DownloadPage"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
