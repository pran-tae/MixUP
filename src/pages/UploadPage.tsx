import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/transition");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="text-4xl border border-black p-4 rounded-2xl hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        Mix!
      </button>
    </div>
  );
}
