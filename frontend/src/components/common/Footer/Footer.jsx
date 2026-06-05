import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">

        <div className="footer-column">
          <h3>Zerodha</h3>
          <p>
            Modern platform for investing and trading.
          </p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

         <div className="footer-column">
          <h4>Support</h4>

          <Link to="/support">Support Portal</Link>
          <Link to="/signup">Open Account</Link>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>

          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>


      </div>
        <div className="footer-bottom">
        <p>© 2026 Zerodha Clone. Built for learning.</p>
      </div>
    </footer>
  )
}

export default Footer