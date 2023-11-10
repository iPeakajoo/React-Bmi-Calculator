
const NavBar = () => {
  return (
    <>
      <div className=" bg-gray-500 ">
        <div className=" container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <h1 className=" font-bold text-4xl text-white">Logo</h1>
            <ul className="flex items-center text-white">
              <li className="mx-2">
                <a href="/" className=" hover:text-black">
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className=" hover:text-black">
                  About
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className=" hover:text-black">
                  Contact
                </a>
              </li>
              <li className="mx-2">
                <a href="/">
                  {" "}
                  <button className=" bt-outline drop-shadow-lg">
                    Register
                  </button>
                </a>
              </li>
              <li className="mx-2">
                <a href="/" className=" hover:text-black">
                  {" "}
                  <button className=" bt-green drop-shadow-lg">Login</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
