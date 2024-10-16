import Facebook from './svg/Facebook';
import Twitter from './svg/Twitter';
import Youtube from './svg/Youtube';
import LinkedIn from './svg/LinkedIn';
import Send from './svg/Send';
import Message from './svg/Message';
import Logo from '../../assets/svg/Logo.jsx';
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter">
          <div className="logoSection">
            <Logo />
          </div>
          <div className='inputBox'>
            <Message />
            <input type="email" placeholder="Enter Your Email" className="emailInput" />
            <button className="emailButton">
              <Send />
            </button>
          </div>
        </div>
        <div className="linksSection">
          <div className="column">
            <h3 className="columnTitle">Home</h3>
            <ul className="linkList">
              <li className="link">Hero Section</li>
              <li className="link">Features</li>
              <li className="link">Properties</li>
              <li className="link">Testimonials</li>
              <li className="link">FAQs</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="columnTitle">About Us</h3>
            <ul className="linkList">
              <li className="link">Our Story</li>
              <li className="link">Our Works</li>
              <li className="link">How It Works</li>
              <li className="link">Our Team</li>
              <li className="link">Our Clients</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="columnTitle">Properties</h3>
            <ul className="linkList">
              <li className="link">Portfolio</li>
              <li className="link">Categories</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="columnTitle">Services</h3>
            <ul className="linkList">
              <li className="link">Valuation Mastery</li>
              <li className="link">Strategic Marketing</li>
              <li className="link">Negotiation Wizardry</li>
              <li className="link">Closing Success</li>
              <li className="link">Property Management</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="columnTitle">Contact Us</h3>
            <ul className="linkList">
              <li className="link">Contact Form</li>
              <li className="link">Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className='bottomLeft'>
          <span>@2023 Estatein. All Rights Reserved.</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="socialMediaSection">
          <button className="socialIcon"><Facebook /></button>
          <button className="socialIcon"><LinkedIn /></button>
          <button className="socialIcon"><Twitter /></button>
          <button className="socialIcon"><Youtube /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;