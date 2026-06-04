import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/signup">signup</Link>
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