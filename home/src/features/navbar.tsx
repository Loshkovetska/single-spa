import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  LogOut,
  Separator,
} from "@e-commerce/ui-utils";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const { pathname } = useLocation();
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const splittedUserName = user.fname?.split(" ");
  const userName = `${splittedUserName?.[0]?.[0]}${splittedUserName?.[1]?.[0]}`;

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/sign-in");
  };
  return (
    <div className="flex flex-col gap-4 w-full bg-primary-base p-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.imageUrl} />
            <AvatarFallback>{userName}</AvatarFallback>
          </Avatar>
          <span className="line-clamp-1 text-label-sm text-white">
            {user?.fname}
          </span>
        </div>
        <LogOut
          className="text-white"
          onClick={logout}
        />
      </div>
      <Separator className="h-px" />
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/"
            className={`hover:underline ${
              pathname === "/" ? "text-white" : "text-white/80"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/analytics"
            className={`hover:underline ${
              pathname.includes("/analytics") ? "text-white" : "text-white/80"
            }`}
          >
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/cms"
            className={`hover:underline ${
              pathname.includes("/cms") ? "text-white" : "text-white/80"
            }`}
          >
            CMS
          </Link>
        </li>
      </ul>
    </div>
  );
}
