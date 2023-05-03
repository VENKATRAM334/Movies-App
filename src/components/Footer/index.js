import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="para-container-contact-us">
    <div>
      <div className="contact-details">
        <p className="span-contact">
          Questions? Call:
          <span className="contact-us-para" title="Call">
            000-800-919-1694
          </span>
        </p>
      </div>
      <div className="faq-container">
        <p className="contact-us-para">FAQ</p>
        <p className="contact-us-para">Help Centre</p>
        <p className="contact-us-para">Terms of Use</p>
        <p className="contact-us-para">Privacy</p>
        <p className="contact-us-para">Cookie Preferences</p>
        <p className="contact-us-para">Corporate Information</p>
        <p className="contact-us-para">Contact us</p>
      </div>
      <div className="footer-container">
        <a
          href="https://about.netflix.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle className="google-icon" title="Google" />
        </a>
        <a
          href="https://twitter.com/NetflixIndia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="google-icon" title="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/netflix_in/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="google-icon" title="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="google-icon" title="YouTube" />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
