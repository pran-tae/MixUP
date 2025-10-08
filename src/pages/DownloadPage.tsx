import { useNavigate } from "react-router-dom";

export default function Download() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="text-4xl border border-black p-4 rounded-2xl hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
        Back to home
      </button>
    </div>
  );
}
