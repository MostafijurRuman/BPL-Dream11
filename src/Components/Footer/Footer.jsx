import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <div className="relative bg-white text-black">
      {/* Newsletter Banner */}
      <div className="flex justify-center items-center px-4 py-12 relative z-10">
        <div className="bg-gradient-to-tr from-blue-100 via-white to-orange-100 rounded-xl shadow-lg px-8 w-full max-w-4xl text-center -mb-44  py-[88px] ">
          <h2 className="text-2xl font-semibold mb-2">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest updates and news right in your inbox!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border border-gray-300 w-80 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-tr from-pink-300 via-yellow-300 to-orange-300 text-black font-semibold rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0b0d21] text-white pt-48 pb-12 px-6 relative z-0">
        {/* Logo and Center */}
        <div className="flex flex-col items-center mb-12">
          <img src={logo} alt="Logo" className="h-20 mb-2" />
          <h1 className="tracking-widest text-lg font-semibold">CRICKET</h1>
        </div>

        {/* About, Links, Subscribe - centered in one row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-2">Subscribe</h3>
            <p className="text-gray-400 mb-2 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-64 rounded-l-md focus:outline-none bg-white text-[#13131366]"
              />
              <button className="px-4 py-2 bg-gradient-to-tr from-pink-300 via-yellow-300 to-orange-300 text-black font-semibold rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Copyright */}
        <div className="text-center text-gray-500 text-sm mt-12">
          ©2025 Ruman All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
