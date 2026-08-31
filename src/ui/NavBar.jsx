import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const icons = [
  {
    icon: <IoMdNotificationsOutline />,
    to: "/notifications",
  },
  {
    icon: <LuMessageSquareText />,
    to: "/messages",
  },
];

function NavBar() {
  const { authenticated, login } = useAuth();
  const navgiate = useNavigate();

  return (
    <header className="flex items-center justify-around text-black text-3xl px-4 shadow-md gap-4">
      <Logo />
      <Menu />
      <SearchBar />
      {authenticated ? (
        <>
          <ul className="flex text-4xl justify-center gap-4">
            {icons.map(({ icon: Icon, to }, index) => (
              <li className="px-4" key={index}>
                <Link to={to}>{Icon}</Link>
              </li>
            ))}
          </ul>
          <UserInfo />
          <Link to="/create-post">
            <Button variant="primary">
              <span className="font-bold"> Đăng tin</span>
            </Button>
          </Link>
        </>
      ) : (
        <><Button onClick={() => login()} variant="primary">
            <span className="font-bold"> Đăng nhập</span>
          </Button>
          <Button
            onClick={() => navgiate("/auth/register")}
            variant="secondary"
          >
            <span className="font-bold"> Đăng ký</span>
          </Button>
        </>
      )}
    </header>
  );
}

export default NavBar;
