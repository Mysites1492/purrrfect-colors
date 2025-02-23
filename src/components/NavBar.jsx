// Navbar Component
function NavBar() {
    return (
      <div className=" bg-white shadow-md mt-8 border-b">
        <div className="flex justify-center space-x-4 py-4">
          <a href="#home" className="px-4 py-2 inline-block hover:bg-gray-200">
            Home
          </a>
          <a href="#portfolio" className="px-4 py-2 inline-block bg-gray-200 hover:bg-gray-300">
            Portfolio
          </a>
          <a href="#contact" className="px-4 py-2 inline-block hover:bg-gray-200">
            Contact
          </a>
          {/* <a href="#pricing" className="px-4 py-2 inline-block sm:inline-block hover:bg-gray-200">
            Pricing
          </a> */}
        </div>
      </div>
    );
  };

  export default NavBar;