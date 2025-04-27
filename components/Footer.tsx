import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaFacebookF, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <div className="container mx-auto px-6 pb-10 grid md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start justify-start footer-logo-section">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Plantify Logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="space-y-2 footer-links">
            <li><Link href="#">Plantify</Link></li>
            <li><a href="https://lynxiotech.co.za" target="_blank" rel="noopener noreferrer">Lynxio Tech</a></li>
            <li><Link href="#">Lynxio Studio</Link></li>
          </ul>
        </div>

        {/* Farmers Links */}
        <div>
          <h4 className="footer-heading">Farmers</h4>
          <ul className="space-y-2 footer-links">
            <li><Link href="#">Gauteng</Link></li>
            <li><Link href="#">Limpopo</Link></li>
            <li><Link href="#">Western Cape</Link></li>
          </ul>
        </div>

        {/* Investors Links */}
        <div>
          <h4 className="footer-heading">Investors</h4>
          <ul className="space-y-2 footer-links">
            <li><Link href="#">Individual</Link></li>
            <li><Link href="#">Organisation</Link></li>
            <li><Link href="#">Angel Investors</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}
      <hr className="footer-divider" />
      <div className="footer-bottom-section flex flex-col md:flex-row items-center justify-between py-6">
        {/* Left Side */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="footer-copyright">©2025 Lynxio Tech</p>
          <p className="footer-terms cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Right Side */}
        <div className="footer-social-container">
          <a href="https://www.linkedin.com/company/plantify-lynxio-tech" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={100} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={100} />
          </a>
          <a href="https://www.youtube.com/watch?v=V4y1bFKW8OA" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={100} />
          </a>
          <a href="https://www.youtube.com/watch?v=VJ89UoTybnI" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <FaGlobe size={100} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
