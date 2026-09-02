import { FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-5">
        <div className="flex-1">
          <a className="py-3 px-8 btn btn-ghost text-xl bg-[rgb(255,229,31)] rounded-xl space-x-2">
            <span className="text-blue-700 italic font-bold text-2xl">f</span>
            <span className="text-sm font-semibold">Flipkart</span>
          </a>
        </div>
        <div className="flex-none">
          <div className="flex justify-center items-center md:mr-15 text-xs md:text-[15px]">
            <FaLocationDot className="mr-1" />
            <p className="font-semibold ">
              Location not set{" "}
              <a href="#" className="text-blue-600 cursor-pointer">
                Select delivery location
              </a>
            </p>
            <FaAngleRight size={13} className="text-blue-600" />
          </div>
        </div>
      </div>
      <div className="navbar gap-7">
        <div className="flex-3">

          <input
            className="w-full border-2 border-blue-500 rounded-xl py-1.5 px-6 text-lg text-gray"
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li>
              <details>
                <summary>
                  <FaRegUserCircle size={21} />
                  Login
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>L</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>{" "}
            <li>
              <details>
                <summary>More</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <summary>
                <FiShoppingCart size={23} className="mr-2" />
                Cart
              </summary>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-gray-300" />
    </div>
  );
};

export default Navbar;
