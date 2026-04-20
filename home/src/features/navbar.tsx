import { Link, useLocation } from "react-router";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <ul className="w-full bg-primary-base p-4 flex flex-col gap-4">
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
  );
}
