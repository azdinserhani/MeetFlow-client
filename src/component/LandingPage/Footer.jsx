import Logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 flex items-center">
            <img src={Logo} alt="MeetFlow Logo" className="h-12 mr-2" />
            MeetFlow
          </h2>
          <p className="text-sm mb-1">
            <strong>Address:</strong>
          </p>
          <p className="text-sm">Level 2, 45 Tech Avenue, Melbourne VIC 3000</p>
          <p className="text-sm mt-3">
            <strong>Contact:</strong>
          </p>
          <p className="text-sm text-blue-400 cursor-pointer">1800 987 654</p>
          <p className="text-sm text-blue-400 cursor-pointer">
            support@MeetFlow.com
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2024 MeetFlow. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
