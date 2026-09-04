import { FaLongArrowAltRight } from "react-icons/fa";
import m1 from "../assets/images/m1.webp";
import { FaStar } from "react-icons/fa";
import flight from "../assets/images/flight.webp";
const Suggestion = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-xl">Suggested For You</h3>
        </div>
        <div className="flex w-10 h-6 rounded-3xl bg-blue-700 justify-center items-center cursor-pointer">
          <FaLongArrowAltRight size={20} className="text-white font-normal" />
        </div>
      </div>

      <div className="flex gap-5 mt-5 rounded-2xl">
        <div className="card w-80">
          <figure>
            <img src={m1} alt="m1" />
            <div className="flex justify-center absolute bg-white w-12 h-6 font-bold bottom-27 left-12 items-center gap-1 rounded-lg text-sm">
              4.5
              <FaStar className=" text-green-700 inline" />
            </div>
          </figure>
          <div>
            <p>Ai+ Nova 2 5G (Blue, 64 GB)</p>
            <h2 className="font-semibold">₹13900</h2>
            <a href="#" className="text-blue-700">
              ₹13200 with bank offer
            </a>
          </div>
        </div>
        <div className="card w-80">
          <figure>
            <img src={m1} alt="m1" />
            <div className="flex justify-center absolute bg-white w-12 h-6 font-bold bottom-27 left-12 items-center gap-1 rounded-lg text-sm">
              4.5
              <FaStar className=" text-green-700 inline" />
            </div>
          </figure>
          <div>
            <p>Ai+ Nova 2 5G (Blue, 64 GB)</p>
            <h2 className="font-semibold">₹13900</h2>
            <a href="#" className="text-blue-700">
              ₹13200 with bank offer
            </a>
          </div>
        </div>
        <div className="card w-80">
          <figure>
            <img src={m1} alt="m1" />
            <div className="flex justify-center absolute bg-white w-12 h-6 font-bold bottom-27 left-12 items-center gap-1 rounded-lg text-sm">
              4.5
              <FaStar className=" text-green-700 inline" />
            </div>
          </figure>
          <div>
            <p>Ai+ Nova 2 5G (Blue, 64 GB)</p>
            <h2 className="font-semibold">₹13900</h2>
            <a href="#" className="text-blue-700">
              ₹13200 with bank offer
            </a>
          </div>
        </div>
        <div className="card w-80">
          <figure>
            <img src={m1} alt="m1" />
            <div className="flex justify-center absolute bg-white w-12 h-6 font-bold bottom-27 left-12 items-center gap-1 rounded-lg text-sm">
              4.5
              <FaStar className=" text-green-700 inline" />
            </div>
          </figure>
          <div>
            <p>Ai+ Nova 2 5G (Blue, 64 GB)</p>
            <h2 className="font-semibold">₹13900</h2>
            <a href="#" className="text-blue-700">
              ₹13200 with bank offer
            </a>
          </div>
        </div>
        <div className="card w-80">
          <figure>
            <img src={m1} alt="m1" />
            <div className="flex justify-center absolute bg-white w-12 h-6 font-bold bottom-27 left-12 items-center gap-1 rounded-lg text-sm">
              4.5
              <FaStar className=" text-green-700 inline" />
            </div>
          </figure>
          <div>
            <p>Ai+ Nova 2 5G (Blue, 64 GB)</p>
            <h2 className="font-semibold">₹13900</h2>
            <a href="#" className="text-blue-700">
              ₹13200 with bank offer
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-5 rounded-3xl">
        <img src={flight} alt="flight" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Suggestion;
