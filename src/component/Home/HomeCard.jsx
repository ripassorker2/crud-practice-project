import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCard = ({ places, count }) => {
  // console.log(count);
  const { photoUrl, place, price, _id } = places;
  return (
    <div className="rounded overflow-hidden shadow-2xl">
      <img className="w-full h-52" src={photoUrl} alt="River" />
      <div className="px-6 my-3 text-center">
        <p className="text-3xl font-bold text-purple-700">{place}</p>
      </div>
      <div className="px-6 pb-3 text-center">
        <p className="text-xl font-semibold">Travel Cost : ${price}</p>
      </div>
      <div className="px-6 pb-2 text-center mb-4">
        <Link to={`/place/${_id}`}>
          <button className="btn ">
            Details <FaArrowRight className="ml-3" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
