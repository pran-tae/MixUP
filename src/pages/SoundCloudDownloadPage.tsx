import { useNavigate } from "react-router-dom";
import { useState } from "react";
import soundcloud_logo from "../assets/soundcloud_logo.png";
import Logo from "../components/Logo";
import left_decor from "../assets/left_header_decoration.png";
import right_decor from "../assets/right_header_decoration.png";
import axios from "axios";

export default function SoundCloudDownload() {
  const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const navigate = useNavigate();
  const [playlistURL, setPlaylistURL] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (id: string) => {
    if (!id.trim()) {
      setError("Please enter a valid SoundCloud playlist URL.");
      return;
    }

    setError(""); // clear any previous error

    try {
      const res = await axios.post(`${url}/getPlaylist`, { url: id });
      navigate("/transition");
    } catch (err) {
      console.error("Error fetching playlist:", err);
      setError("Failed to process playlist. Please try again.");
    }
  };

  return (
    <div className="flex items-center pt-16 h-screen flex-col">
      <Logo />

      <div className="flex items-center justify-center flex-col h-full gap-15">
        <img src={soundcloud_logo} className="w-50" />

        <div className="text-center flex flex-col gap-8">
          <div className="flex gap-4">
            <img src={left_decor} className="w-60" />
            <p className="text-4xl">Download via SoundCloud</p>
            <img src={right_decor} className="w-60" />
          </div>
          <p className="text-md">
            Add a playlist here and we’ll do the rest.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex gap-8">
            <input
              className="mr-4 rounded border px-4 py-2 bg-black text-white placeholder-gray-400"
              type="text"
              placeholder="Enter playlist URL"
              value={playlistURL}
              onChange={(e) => setPlaylistURL(e.target.value)}
            />
            <button
              className="text-button px-8 py-3"
              onClick={() => handleClick(playlistURL)}
            >
              Submit
            </button>
            <button className="text-button px-8 py-3">Test</button>
          </div>

          {/* Conditional red warning message */}
          {error && (
            <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
