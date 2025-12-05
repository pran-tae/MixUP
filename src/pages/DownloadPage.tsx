import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo.tsx";
import { motion } from "framer-motion";
import { ChevronLeft, Music2, SkipBack, Play, Pause, SkipForward, Menu } from "lucide-react";
import SongListOverlay from "../components/SongListOverlay.tsx";

export default function Download() {
  const navigate = useNavigate();
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Song 1: Audio 1");

  const handleBack = () => {
    navigate("/");
  };

  const handleDownload = () => {
    console.log("Download mix");
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between py-16 relative">
      <button
        onClick={handleBack}
        className="absolute top-8 left-8 text-white hover:text-purple-400 transition-colors"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>

      <div>
        <Logo />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold mb-4">Your mix is ready!</h1>

        <motion.div
          className="relative flex items-center justify-center cursor-pointer"
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,165,100,0.6) 0%, rgba(200,100,200,0.6) 100%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative w-72 h-72 rounded-full border-4 border-transparent bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
              <Music2 size={120} className="text-white" strokeWidth={1.5} />
            </div>
          </div>

          <motion.div
            className="absolute -left-24 top-1/3"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="80" height="60" viewBox="0 0 80 60">
              <path
                d="M 0 30 Q 20 10, 40 30 T 80 30"
                stroke="rgba(100, 100, 255, 0.6)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute -right-24 top-1/3"
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="80" height="60" viewBox="0 0 80 60">
              <path
                d="M 0 30 Q 20 50, 40 30 T 80 30"
                stroke="rgba(255, 100, 100, 0.6)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>

        <p className="text-xl text-neutral-200 mt-4 mb-12">Tap the button to download</p>
      </div>

      <div className="w-full max-w-3xl px-8 mb-8">
        <div className="border border-purple-400/40 rounded-2xl p-6 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Menu size={28} strokeWidth={1.5} />
              </button>
              <span className="text-lg">{currentSong}</span>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-white hover:text-purple-400 transition-colors">
                <SkipBack size={28} strokeWidth={1.5} />
              </button>
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={32} strokeWidth={1.5} fill="white" />
                ) : (
                  <Play size={32} strokeWidth={1.5} fill="white" />
                )}
              </button>
              <button className="text-white hover:text-purple-400 transition-colors">
                <SkipForward size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="w-full h-1 bg-gray-700 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={{ duration: 240, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {showPlaylist && (
        <SongListOverlay
          onClose={() => setShowPlaylist(false)}
          onSelectSong={(song) => {
            setCurrentSong(song);
            setShowPlaylist(false);
          }}
        />
      )}
    </div>
  );
}
