import { useNavigate } from "react-router-dom";
import button from "../assets/download_button.png";
import Logo from "../components/Logo.tsx";

export default function Download() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center pt-16 h-screen flex-col ">
      <Logo />
      <div className="flex items-center justify-center flex-col h-full gap-16">
        <a href="" download className="cursor-pointer" onClick={handleClick}>
          <img src={button} className="-mb-16 w-lg" />
        </a>
        <div className="text-center text-2xl flex flex-col gap-12">
          <p>Your mix is ready!</p>
          <p>Tap the button to download</p>
        </div>
      </div>
    </div>
  );
}
