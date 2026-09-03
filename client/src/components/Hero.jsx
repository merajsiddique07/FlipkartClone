import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.webp";
import h3 from "../assets/images/h3.webp";
import h4 from "../assets/images/h4.webp";
import h5 from "../assets/images/h5.webp";
import h6 from "../assets/images/h6.webp";
import mivi from "../assets/images/Mivi.webp";
const Hero = () => {
  return (
    <div className="mt-2">
      <div className="carousel gap-10">
        <div id="item1" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h1}
            width={550}
            className="rounded-3xl"
          />
        </div>

        <div id="item2" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h2}
            width={550}
            className="rounded-3xl"
          />
        </div>
        <div id="item3" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h3}
            width={550}
            className="rounded-3xl"
          />
        </div>
        <div id="item4" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h4}
            width={550}
            className="rounded-3xl"
          />
        </div>
        <div id="item5" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h5}
            width={550}
            className="rounded-3xl"
          />
        </div>
        <div id="item6" className="carousel-item ">
          <img
            alt="Tailwind CSS gallery"
            src={h6}
            width={550}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="w-1 h-1 rounded-full bg-gray-600"></a>
        <a href="#item2" className="w-1 h-1 rounded-full bg-gray-600"></a>
        <a href="#item3" className="w-1 h-1 rounded-full bg-gray-600"></a>
        <a href="#item4" className="w-1 h-1 rounded-full bg-gray-600"></a>
        <a href="#item5" className="w-1 h-1 rounded-full bg-gray-600"></a>
        <a href="#item6" className="w-1 h-1 rounded-full bg-gray-600"></a>
      </div>
      <div className=" mt-5 rounded-3xl">
        <img src={mivi} alt="mivi" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default Hero;
