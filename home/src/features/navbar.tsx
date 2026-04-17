import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="min-w-100 max-w-100 bg-primary-base text-white">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Charts</Link>
        </li>
        <li>
          <Link to="/">CMS</Link>
        </li>
      </ul>
    </div>
  );
}
