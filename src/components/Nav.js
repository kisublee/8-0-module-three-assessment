
import { Link } from 'react-router-dom';
import './Nav.css';
import homeLogo from "../media/Pursuit.png"

const Nav = (
) => {
  return (
    <nav>
        <div>
          <Link to="/"><img className='home-logo' src={homeLogo} alt="home-logo"/></Link>
        </div>

        <div>
        <Link to="/movies">Movies</Link>
        </div>

        <div>
        <Link to="/people">People</Link>
        </div>

        <div>
        <Link to="/locations">Locations</Link>
        </div>
    </nav>
  );
};

export default Nav;
