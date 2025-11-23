import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Logo from "../components/Logo.tsx";

export default function ChooseUpload() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/upload");
  };

  const handleSoundCloudClick = () => {
    navigate("/soundcloud-download");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-purple-950 to-black text-white min-h-screen flex flex-col p-8">
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-8 text-white hover:text-purple-400 transition-colors"
      >
        <ArrowLeft size={48} strokeWidth={2} />
      </button>

      <div className="flex flex-col items-center pt-8 mb-12">
        <Logo />
      </div>

      <div className="flex items-center justify-center mb-16 mt-8">
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-pink-500 to-purple-500"></div>
        <h2 className="text-4xl font-bold px-8 whitespace-nowrap">Choose your pulse</h2>
        <div className="h-px w-64 bg-gradient-to-l from-transparent via-purple-500 to-pink-500"></div>
      </div>

      <div className="flex items-center justify-center gap-12 flex-1 pb-20">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-2 border-blue-400/50 rounded-2xl w-[500px] h-[600px]
                     bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black
                     shadow-2xl shadow-blue-900/50 flex flex-col overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
            <h3 className="text-3xl font-bold">File Upload</h3>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="mb-12">
              <Download size={120} className="text-white" strokeWidth={1.5} />
            </div>

            <p className="text-center text-lg mb-12 px-4 leading-relaxed">
              Create your mix by uploading mp3 files of your songs
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUploadClick}
              className="px-16 py-4 text-2xl font-bold border-2 border-blue-400 rounded-xl
                         bg-blue-600/20 hover:bg-blue-600/40
                         shadow-lg shadow-blue-900/50 cursor-pointer
                         transition-all duration-300"
            >
              START!
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-2 border-orange-400/50 rounded-2xl w-[500px] h-[600px]
                     bg-gradient-to-br from-orange-900/30 via-red-900/20 to-black
                     shadow-2xl shadow-orange-900/50 flex flex-col overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-center">
            <h3 className="text-3xl font-bold">SoundCloud Upload</h3>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="mb-12">
              <img
                src="/src/assets/soundcloud_logo.png"
                alt="SoundCloud Logo"
                className="w-64 h-auto"
              />
            </div>

            <p className="text-center text-lg mb-12 px-4 leading-relaxed">
              Create your mix by uploading a playlist via SoundCloud
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSoundCloudClick}
              className="px-16 py-4 text-2xl font-bold border-2 border-orange-400 rounded-xl
                         bg-orange-600/20 hover:bg-orange-600/40
                         shadow-lg shadow-orange-900/50 cursor-pointer
                         transition-all duration-300"
            >
              START!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
