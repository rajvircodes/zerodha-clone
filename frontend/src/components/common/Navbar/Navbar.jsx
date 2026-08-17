import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../assets/images/logo.svg'
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='nav-logo'>
          <Link to="/">
          <img src={logo} alt={"zerodha logo"} />
          </Link>
        </div>
        <div className='nav-links'>
          <details className="nav-menu">
            <summary aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </summary>
            <Link to="/signup">Signup</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>
          </details>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
