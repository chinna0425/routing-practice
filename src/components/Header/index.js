import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logodesign">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="waveheading">Wave</h1>
    </div>
    <ul className="unorderlistelements">
      <li>
        <Link to="/" className="list-items">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list-items">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="list-items">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
