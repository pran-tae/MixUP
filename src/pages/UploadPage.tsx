import { useState, useRef } from "react";
import type { ChangeEvent, DragEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Logo from "../components/Logo.tsx";

export default function UploadFiles() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleBackClick = () => {
    navigate("/choose-upload");
  };

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles = Array.from(fileList);
    setUploadedFiles((prev) => {
      const existingSignatures = new Set(prev.map((f) => `${f.name}-${f.size}`));
      const deduped = newFiles.filter(
        (f) => !existingSignatures.has(`${f.name}-${f.size}`)
      );
      return [...prev, ...deduped];
    });
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if ((e.target as HTMLElement).id === "dropzone") {
      setIsDragging(false);
    }
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleMixClick = () => {
    navigate("/transition");
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-purple-950 to-black text-white min-h-screen flex flex-col p-8 relative">
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-8 text-white hover:text-purple-400 transition-colors"
      >
        <ArrowLeft size={48} strokeWidth={2} />
      </button>

      <div className="flex flex-col items-center pt-8 mb-10">
        <Logo />
      </div>

      <div className="flex items-center justify-center mb-12 mt-2">
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-pink-500 to-purple-500" />
        <h2 className="text-4xl font-bold px-8 whitespace-nowrap">
          Upload files
        </h2>
        <div className="h-px w-64 bg-gradient-to-l from-transparent via-purple-500 to-pink-500" />
      </div>

      <div className="flex flex-1 items-center justify-center gap-16 pb-16">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-2 border-purple-500/60 rounded-2xl w-[520px] h-[420px]
                     bg-gradient-to-br from-slate-900/80 via-slate-950 to-black
                     shadow-2xl shadow-purple-900/60 flex flex-col items-center justify-center
                     cursor-pointer"
          id="dropzone"
          onClick={handleDropzoneClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div
            className={`flex flex-col items-center justify-center w-[80%] h-[80%] rounded-2xl border-2 border-dashed
            ${
              isDragging
                ? "border-purple-400 bg-purple-900/20"
                : "border-slate-700 bg-slate-900/40"
            } transition-all duration-200`}
          >
            <Download size={80} strokeWidth={1.5} className="mb-6" />
            <p className="text-xl font-semibold mb-2">Drop files to upload</p>
            <p className="text-sm text-slate-300">
              or <span className="underline">choose files</span>
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="audio/*"
            className="hidden"
            onChange={handleFileInputChange}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border-2 border-purple-400/60 rounded-2xl w-[420px] h-[420px]
                     bg-gradient-to-b from-purple-800/80 via-slate-950 to-black
                     shadow-2xl shadow-purple-900/60 flex flex-col overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-center">
            <h3 className="text-2xl font-bold">Uploaded files</h3>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            {uploadedFiles.length === 0 ? (
              <p className="text-slate-300 italic">
                No files uploaded yet. Add some audio files to get started.
              </p>
            ) : (
              <ol className="space-y-2 list-decimal list-inside">
                {uploadedFiles.map((file, index) => (
                  <li key={`${file.name}-${file.size}-${index}`} className="truncate">
                    {file.name}
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="p-4 flex justify-center">
            <motion.button
              whileHover={{ scale: uploadedFiles.length ? 1.05 : 1 }}
              whileTap={{ scale: uploadedFiles.length ? 0.95 : 1 }}
              disabled={uploadedFiles.length === 0}
              onClick={handleMixClick}
              className={`px-12 py-3 text-xl font-bold rounded-xl border-2
                ${
                  uploadedFiles.length === 0
                    ? "border-slate-600 text-slate-500 bg-slate-800 cursor-not-allowed"
                    : "border-purple-400 bg-purple-700/50 hover:bg-purple-600/70 cursor-pointer"
                }
                shadow-lg shadow-purple-900/60 transition-all duration-300`}
            >
              MIX!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
