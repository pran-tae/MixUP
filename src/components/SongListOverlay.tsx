import { motion, AnimatePresence } from "framer-motion";
import { X, Music2 } from "lucide-react";

interface Song {
  name: string;
  artist: string;
  length: string;
}

interface SongListOverlayProps {
  onClose: () => void;
  onSelectSong: (songName: string) => void;
}

const songs: Song[] = [
  { name: "Audio 1", artist: "Artist 1", length: "4:00" },
  { name: "Audio 2", artist: "Artist 2", length: "3:55" },
  { name: "Audio 3", artist: "Artist 3", length: "5:40" },
];

export default function SongListOverlay({ onClose, onSelectSong }: SongListOverlayProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-purple-400/40 rounded-2xl p-8 max-w-4xl w-full mx-4 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-pink-500"></div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Playlist
              </h2>
              <div className="h-px w-32 bg-gradient-to-l from-transparent via-pink-500 to-purple-500"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 px-6 pb-4 border-b border-purple-400/30">
              <div className="text-lg font-semibold text-neutral-300">Name</div>
              <div className="text-lg font-semibold text-neutral-300">Artist</div>
              <div className="text-lg font-semibold text-neutral-300 text-right">Length</div>
            </div>

            {songs.map((song, index) => (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                className="grid grid-cols-3 gap-4 px-6 py-4 rounded-lg cursor-pointer transition-colors border-b border-purple-400/20 last:border-b-0"
                onClick={() => onSelectSong(`Song ${index + 1}: ${song.name}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 via-purple-500 to-pink-500 flex items-center justify-center">
                    <Music2 size={20} className="text-white" strokeWidth={2} />
                  </div>
                  <span className="text-white text-lg">{song.name}</span>
                </div>
                <div className="flex items-center text-neutral-300 text-lg">
                  {song.artist}
                </div>
                <div className="flex items-center justify-end text-neutral-300 text-lg">
                  {song.length}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
