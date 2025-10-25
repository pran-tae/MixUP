import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/transition");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="text-4xl p-4" onClick={handleClick}>
        Mix!
      </button>
    </div>
  );
}
