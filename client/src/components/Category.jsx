import { RiShoppingBag3Line } from "react-icons/ri";
import { LuShirt } from "react-icons/lu";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { LuLamp } from "react-icons/lu";
import { FaDesktop } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdOutlineSportsCricket } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
const Category = () => {
  return (
    <div className="flex gap-4 pt-2">
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <RiShoppingBag3Line size={22} />
        </div>
        <div>For You</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <LuShirt size={22} />
        </div>
        <div>Fashion</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <FaMobileAlt size={22} />
        </div>
        <div>Mobiles</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <FaLaptop size={22} />
        </div>
        <div>Electronics</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <GiLipstick size={22} />
        </div>
        <div>Beauty</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <LuLamp size={22} />
        </div>
        <div>Home</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <FaDesktop size={22} />
        </div>
        <div>Appliances</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <MdOutlineToys size={22} />
        </div>
        <div>Toys, ba..</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <IoFastFoodOutline size={22} />
        </div>
        <div>Food</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <GiFullMotorcycleHelmet size={22} />
        </div>
        <div>Auto </div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <MdOutlineSportsCricket size={22} />
        </div>
        <div>Sports</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <LuSofa size={22} />
        </div>
        <div>Furniture</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <FaBook size={22} />
        </div>
        <div>Books</div>
      </div>
      <div className="w-18 h-18 flex flex-col justify-center align-middle items-center">
        <div>
          <GiScooter size={22} />
        </div>
        <div>2 Wheel..</div>
      </div>
    </div>
  );
};

export default Category;
