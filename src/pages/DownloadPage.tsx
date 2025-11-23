import { useNavigate } from "react-router-dom";
import button from "../assets/download_button.png";
import Logo from "../components/Logo.tsx";
import { motion } from "framer-motion";

export default function Download() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center pt-16 h-screen flex-col ">
      <Logo />
      <div className="flex items-center justify-center gap-4 mb-12 -mt-4">
      <img src="/src/assets/left_header_decoration.png" alt="left_design" />
          <h2 className="text-3xl font-semibold">Choose your Pulse </h2>
      <img src="/src/assets/right_header_decoration.png" alt="right_design" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center border border-purple-400 rounded-xl shadow-lg shadow-purple-900/20 bg-black w-108 h-108">
            <h3 className="text-xl bg-gradient-to-r from-indigo-400 to-pink-300 font-semibold p-4 rounded-t-xl -mb-12">
              File Upload
            </h3>

            <div className = "flex flex-col items-center justify-center">
            <img className="cursor-pointer scale-50 -mb-24" src="/src/assets/download_button.png" alt="left_design" />
            <p className="text-md leading-relaxed p-4">
              Create your mix by uploading mp3 files of your songs.
            </p>

            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-48 text-2xl font-semibold border border-purple-400 p-4 rounded-2xl shadow-lg shadow-purple-900/20 
                      hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 cursor-pointer"
            
          >
            START
          </motion.button>
          </div>
          </div>

          <div className="text-center border border-purple-400 rounded-xl shadow-lg shadow-purple-900/20 bg-black w-108 h-108">
            <h3 className="text-xl mb-12 bg-gradient-to-r from-pink-500 to-purple-500 font-semibold p-4 rounded-t-xl">
              SoundCloud Upload
            </h3>
            <div className = "flex flex-col items-center justify-center">
            <img className="cursor-pointer scale-75 mb-8" src="/src/assets/soundcloud_logo.png" alt="left_design" />

            <p className="text-md leading-relaxed p-4">
              Create your mix by uploading a playlist via SoundCloud.
            </p>

            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-48 text-2xl font-semibold border border-purple-400 p-4 rounded-2xl shadow-lg shadow-purple-900/20 
                      hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 cursor-pointer"
            
          >
            START
          </motion.button>
          </div>
          </div>
        </div>
    </div>
  );
}
