import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo.tsx";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/choose-upload");
  };

  return (
    <div className="flex items-center p-16 h-screen flex-col ">
      <Logo />
      <div className="flex items-center justify-center flex-col h-full">
        <button className="text-button text-4xl p-4" onClick={handleClick}>
          START!
        </button>
      </div>
    </div>
  );
}
