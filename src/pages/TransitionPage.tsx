import { useNavigate } from "react-router-dom";

export default function Transition() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/download");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl mb-4">Mixing...</div>

      <button
        className="text-4xl border border-black p-4 rounded-2xl hover:bg-gray-100 cursor-pointer"
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  );
}
