import Category from "../components/Category";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <hr className="text-gray-300" />
    </div>
  );
};

export default Home;
