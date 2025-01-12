import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black mb-2 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">KRO Welfare</h3>
            <p className="text-sm">
              Welfare portal is a platform designed to manage contributions and assist  in handling welfare events seamlessly.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: krowelfareportal@gmail.com</li>
              <li>Phone: 0701152721</li>
              <li>Address: 100, Nakuru, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center border-t border-white/30 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Densir Tech Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
