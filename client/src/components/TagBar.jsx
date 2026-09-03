import genz from "../assets/icons/genZ.webp";
import flip from "../assets/icons/flipplus.webp";
import pink from "../assets/icons/pinkvilla.webp";
import sell from "../assets/icons/sellph.webp";
import gift from "../assets/icons/giftcards.webp";
import orig from "../assets/icons/originals.webp";
import plus from "../assets/icons/plus.webp";
import supercoins from "../assets/icons/supercoins.webp";
import next from "../assets/icons/nextgen.webp";
const TagBar = () => {
  return (
    <div className="w-[75%] h-22 mt-5 flex justify-between items-center">
      <div className="flex flex-col items-center">
        <div>
          <img src={genz} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">For GenZ</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={flip} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Flipkart...</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={pink} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Pinkvilla</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={sell} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Sell ph..</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={gift} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Gift Cards</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={orig} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Originals</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={plus} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Plus</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={supercoins} alt="genz" />
        </div>
        <div>
          <p className=" text-sm font-semibold">Supercoins</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img src={next} alt="genz" />
        </div>
        <div>
          <p className="text-sm font-semibold">Next-Gen</p>
        </div>
      </div>
    </div>
  );
};

export default TagBar;
