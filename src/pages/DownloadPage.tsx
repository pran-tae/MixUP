import { useNavigate } from "react-router-dom";

export default function Download() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button className="text-4xl p-4" onClick={handleClick}>
        Back to home
      </button>
    </div>
  );
}
