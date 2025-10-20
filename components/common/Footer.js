const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates from Logo.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamus.com</p>

          <h3>CURRENCY</h3>
          <p><strong>USD</strong></p>
          <p>Transactions will be completed in Euros and a currency reference is available on here:</p>
        </div>

        <div className="footer-section">
          <h3>Logo</h3>
          <div className="footer-links">
            <div className="footer-links-column">
              <a href="/about">About Us</a>
              <a href="/stories">Stories</a>
              <a href="#">Artisans</a>
              <a href="#">Boutiques</a>
              <a href="/contact">Contact Us</a>
              <a href="#">EU Compliances Docs</a>
            </div>
            <div className="footer-links-column">
              <a href="#">Orders & Shipping</a>
              <a href="#">Join/Login as a Seller</a>
              <a href="#">Payment & Pricing</a>
              <a href="#">Return & Refunds</a>
              <a href="#">FAQs</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <div className="quick-links">
            <a href="#">Orders & Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment & Pricing</a>
            <a href="#">Return & Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <button className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
            <button className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <path d="M17.5 6.5H17.51"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
            <button className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <h3>Logo ACCEPTS</h3>
          <div className="payment-icons">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtroC78ml1CoAkcniu2KDlpXVAojoYpYZTgA&s" 
              alt="Payment Methods" 
              className="payment-image"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 mettâ muse. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer