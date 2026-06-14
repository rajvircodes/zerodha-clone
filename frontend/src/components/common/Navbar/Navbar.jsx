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
          <a
  href="https://zerodha-clone-b8ir.vercel.app/register"
>
  Signup
</a>
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