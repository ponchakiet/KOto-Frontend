import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <img className="w-47 h-32.5 object-contain" src="/logo.png" />
    </div>
  );
}

export default Logo;
