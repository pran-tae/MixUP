import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="text-4xl p-4" onClick={handleClick}>
        START!
      </button>
    </div>
  );
}
