import gimbal from "../assets/products/gimbal.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
const OnList = () => {
  return (
    <div className="bg-sky-100 w-full h-80 mt-5 rounded-2xl px-3 py-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">On everbody's list</h1>
        <div className="flex w-10 h-6 rounded-3xl bg-black justify-center items-center cursor-pointer">
          <FaLongArrowAltRight size={20} className="text-white font-normal" />
        </div>
      </div>

      <div className="flex bg-white w-full h-[90%] mt-2 rounded-2xl p-2 justify-between gap-2">
        <div className="w-70">
          <div className="h-46 flex justify-center bg-gray-200 p-3 rounded-xl">
            <img width={60} src={gimbal} alt="gimbal" />
          </div>
          <p>Top Sellers</p>
          <h1 className="font-semibold">Under 299</h1>
        </div>
        <div className="w-70">
          <div className="h-46 flex justify-center bg-gray-200 p-3 rounded-xl">
            <img width={60} src={gimbal} alt="gimbal" />
          </div>
          <p>Top Sellers</p>
          <h1 className="font-semibold">Under 299</h1>
        </div>
        <div className="w-70">
          <div className="h-46 flex justify-center bg-gray-200 p-3 rounded-xl">
            <img width={60} src={gimbal} alt="gimbal" />
          </div>
          <p>Top Sellers</p>
          <h1 className="font-semibold">Under 299</h1>
        </div>
        <div className="w-70">
          <div className="h-46 flex justify-center bg-gray-200 p-3 rounded-xl">
            <img width={60} src={gimbal} alt="gimbal" />
          </div>
          <p>Top Sellers</p>
          <h1 className="font-semibold">Under 299</h1>
        </div>
      </div>
    </div>
  );
};

export default OnList;
