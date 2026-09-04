import BigBlock from "../components/BigBlock";
import Category from "../components/Category";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OnList from "../components/OnList";
import Suggestion from "../components/Suggestion";
import TagBar from "../components/TagBar";
import TopDeals from "../components/TopDeals";
import mobile2 from "../assets/products/mobile2.webp";
import mobile from "../assets/products/mobile.webp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <hr className="text-gray-300" />
      <Hero />
      <Suggestion />
      <OnList />
      <TopDeals />
      <h1 className="mt-8 text-2xl font-bold">Brands in Spotlight</h1>
      <OnList />
      <OnList />
      <OnList />
      <TagBar />
      <OnList />
      <BigBlock image={mobile} />
      <BigBlock image={mobile2} />
      <BigBlock image={mobile2} />
      <BigBlock image={mobile2} />
      <BigBlock image={mobile2} />
      <BigBlock image={mobile2} />
      <BigBlock image={mobile2} />
    </div>
  );
};

export default Home;
