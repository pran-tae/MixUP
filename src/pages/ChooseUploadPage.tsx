import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo.tsx";

export default function ChooseUpload() {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/upload");
  };

  const handleSoundCloudClick = () => {
    navigate("/soundcloud-download");
  };

  return (
    <div className="flex items-center p-16 h-screen flex-col ">
      <Logo />
      <div className="flex items-center justify-center h-full gap-4">
        <button
          className="text-button text-4xl p-4"
          onClick={handleUploadClick}
        >
          Upload
        </button>
        <button
          className="text-button text-4xl p-4"
          onClick={handleSoundCloudClick}
        >
          SoundCloud Download
        </button>
      </div>
    </div>
  );
}
