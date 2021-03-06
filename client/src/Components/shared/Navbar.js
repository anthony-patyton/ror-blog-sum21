import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/blogs">
          Blogs
        </Link>
      </li>
    </ul>
  </>
)
export default Navbar;