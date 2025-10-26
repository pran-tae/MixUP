import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className="w-xl" onClick={handleClick}>
      <img src="logo.png" alt="logo" />
    </button>
  );
}
