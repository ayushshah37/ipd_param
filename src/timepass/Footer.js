"use client"
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
// import { Router } from 'lucide-react';



const Footer = () => {

  

  const router=useRouter()

  const Ayush =()=>{
    router.push("Contact_us")
  }

  return (

    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              
              <ul>
                <li><a href="#"> parkingguardian@gmail.com</a></li>
                <li><a href="#">+91 932*******</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className="footer-col">
              
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
            {/* <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">watch</a></li>
                <li><a href="#">bag</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">dress</a></li>
              </ul>
            </div> */}
            <div className="footer-col">
              <h4>© 2024 TheParkingGuardian      All rights reserved.</h4>
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <button>
                <FontAwesomeIcon icon={faFacebookF} />
                &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                </button>
                <button>
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;
                </button>
                {/* Uncomment these lines if you want to use the anchor tags */}
                {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                {/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
            <div className="footer-col">
            <button>
            <div className="min-w-max w-full py-7 px-8 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded cursor-pointer flex items-center justify-center" onClick={Ayush}>
  Contact us
</div>



</button>
              {/* <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
