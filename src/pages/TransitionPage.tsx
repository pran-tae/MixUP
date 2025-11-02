import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo.tsx";

export default function Transition() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/download");
  };

  return (
    <div className="flex items-center p-16 h-screen flex-col ">
      <Logo />
      <div className="flex items-center justify-center flex-col h-full">
        <div>
          <div className="text-4xl mb-4">Mixing...</div>
          <button className="text-button text-4xl p-4" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
