import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to={"/register"} className="font-body font-normal">
        <button className="font-body w-[152px] h-[53px] rounded bg-gradient-to-r from-purple-600 to-pink-500">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Button;
