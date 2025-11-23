import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Download, Shuffle, Music } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/choose-upload");
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-purple-950 to-black text-white flex flex-col items-center justify-center min-h-screen overflow-y-auto p-8">
      <Logo/>
      <p className="text-lg mb-16">Redefine your music one pulse at a time</p>

      <div className="border border-purple-400/40 rounded-xl p-10 text-center mb-16 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm shadow-2xl shadow-purple-900/30 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">Welcome to PennPulse.</h2>
        <p className="text-base leading-relaxed">
          PennPulse is a one-stop platform that enhances music mixing. We turn
          your playlist into a continuous, on beat, exportable mix that you can
          use for your personal music or to DJ. We employ AI machine learning to
          produce the most optimal music based on musical compatability. But you
          don't have to worry about that, all you need to worry about is the
          music you want to mix.
        </p>
      </div>

      <div className="mb-16 text-center w-full max-w-6xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-pink-500"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PennPulse in Steps
          </h2>
          <div className="h-px w-32 bg-gradient-to-l from-transparent via-pink-500 to-purple-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-red-500/50 bg-gradient-to-br from-red-950/40 to-black flex items-center justify-center mb-6 shadow-xl shadow-red-900/30">
              <Download size={64} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Upload</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Upload files or paste links to the program
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-cyan-500/50 bg-gradient-to-br from-cyan-950/40 to-black flex items-center justify-center mb-6 shadow-xl shadow-cyan-900/30">
              <Shuffle size={64} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mix</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              After files or links are uploaded, the program mixes your music together.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full border-4 border-purple-500/50 bg-gradient-to-br from-purple-950/40 to-black flex items-center justify-center mb-6 shadow-xl shadow-purple-900/30">
              <Music size={64} className="text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Download</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              After a short wait, download your mixed file - and you're done!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-4xl mt-8 mb-12 px-8">
        <h2 className="text-3xl font-bold">Ready to build your mix?</h2>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="px-12 py-4 text-xl font-bold border-2 border-blue-500 rounded-lg
                     bg-gradient-to-r from-blue-600/20 to-purple-600/20
                     hover:from-blue-600/40 hover:to-purple-600/40
                     shadow-lg shadow-blue-900/50 cursor-pointer
                     transition-all duration-300 flex items-center gap-3"
        >
          Get Started
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
