import { useNavigate } from "react-router-dom";
import soundcloud_logo from "../assets/soundcloud_logo.png";
import Logo from "../components/Logo.tsx";
import left_decor from "../assets/left_header_decoration.png";
import right_decor from "../assets/right_header_decoration.png";

export default function SoundCloudDownload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/transition");
  };

  return (
    <div className="flex items-center pt-16 h-screen flex-col ">
      <Logo />

      <div className="flex items-center justify-center flex-col h-full gap-15">
        <img src={soundcloud_logo} className="w-50" />

        <div className="text-center flex flex-col gap-8">
          <div className="flex gap-4">
            <img src={left_decor} className="w-60" />
            <p className="text-4xl">Download via SoundCloud</p>
            <img src={right_decor} className="w-60" />
          </div>
          <p className="text-md">add a playlist here and we’ll do the rest.</p>
        </div>

        <div className="flex gap-8">
          <input
            className="input px-4 py-2 w-80"
            type="text"
            placeholder="Enter playlist URL"
          />
          <button className="text-button px-8 py-3" onClick={handleClick}>
            Submit
          </button>
          <button className="text-button px-8 py-3">Test</button>
        </div>
      </div>
    </div>
  );
}
