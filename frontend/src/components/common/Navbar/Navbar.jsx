import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../assets/images/logo.svg'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className='nav-logo'>
          <Link to="/">
          <img src={logo} alt={"zerodha logo"} />
          </Link>
        </div>
        <div className='nav-links'>
          <Link to="/signup">Signup</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
        </div>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`mobile-nav-menu ${isMobileMenuOpen ? 'is-open' : ''}`}
          id="mobile-navigation"
        >
          <Link to="/signup">Signup</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
