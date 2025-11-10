import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function Home() {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate("/choose-upload");
  };

  const handleDownload = () => {
    // change this route to whatever your download page/flow is
    navigate("/download");
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen overflow-y-auto p-8">
      <Logo />

      <h1 className="text-6xl font-bold mb-6">PennPulse</h1>

      <p className="text-lg mb-12">Redefine your music one pulse at a time</p>

      <div className="border border-purple-400 rounded-xl p-8 text-center mb-12 bg-black shadow-lg shadow-purple-900/20 w-[236px] md:w-[600px]">
        <h2 className="text-xl font-semibold mb-4">Welcome to PennPulse.</h2>
        <p className="text-md leading-relaxed">
          PennPulse is a one-stop platform that enhances music mixing. We turn
          your playlist into a continuous, on-beat, exportable mix that you can
          use for your personal music or to DJ. We employ AI and machine
          learning to optimize transitions based on musical compatibility—tempo,
          key, and energy—so you can focus purely on what you want to hear.
        </p>
      </div>

      <div className="mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-12">PennPulse in Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-purple-400 rounded-xl shadow-lg shadow-purple-900/20 bg-black hover:bg-indigo-400/30 w-72 h-54">
            <h3 className="text-xl bg-gradient-to-r from-indigo-400 to-pink-300 font-semibold p-4 rounded-t-xl">
              Step 1: Upload
            </h3>
            <p className="text-md leading-relaxed p-4">
              Upload files or paste playlist/track links.
            </p>
          </div>

          <div className="border border-purple-400 rounded-xl shadow-lg shadow-purple-900/20 bg-black hover:bg-purple-500/30 w-72 h-54">
            <h3 className="text-xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold p-4 rounded-t-xl">
              Step 2: Mix
            </h3>
            <p className="text-md leading-relaxed p-4">
              We analyze tempo, key, and structure to build one continuous mix.
            </p>
          </div>

          <div className="border border-purple-400 rounded-xl shadow-lg shadow-purple-900/20 bg-black hover:bg-violet-400/30 w-72 h-54">
            <h3 className="text-xl bg-gradient-to-r from-pink-400 to-violet-400 font-semibold p-4 rounded-t-xl">
              Step 3: Download
            </h3>
            <p className="text-md leading-relaxed p-4">
              Export your final mix and use it anywhere.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleUpload}
          className="w-48 text-2xl font-semibold border border-purple-400 p-4 rounded-2xl shadow-lg shadow-purple-900/20 
                     hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 cursor-pointer"
        >
          UPLOAD
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownload}
          className="w-48 text-2xl font-semibold border border-purple-400 p-4 rounded-2xl shadow-lg shadow-purple-900/20 
                     hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 cursor-pointer"
        >
          DOWNLOAD
        </motion.button>
      </div>
    </div>
  );
}
