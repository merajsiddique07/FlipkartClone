
const BigBlock = (props) => {
  return (
    <div>
      <div className="flex justify-center bg-gray-200 mt-10 p-2 rounded-xl">
        <div>
          <img className="rounded-4xl" src={props.image} alt="mobile" />
        </div>
      </div>
      <div>
        <p className="text-gray-500">
          <span className="text-black font-semibold">Samsung </span>
          Galaxy J7 (Gold, 16GB)
        </p>
        <p>
          <strike className="text-gray-500">₹11,700 </strike>
          <span className="font-semibold ml-1"> ₹9,900</span>
        </p>
        <p className="text-blue-700">
          {" "}
          <span className="font-bold">₹9,490 </span>
          with Bank Offer
        </p>
      </div>
    </div>
  );
};

export default BigBlock;
