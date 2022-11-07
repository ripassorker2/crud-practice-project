import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import HomeCard from "./HomeCard";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [place, setPlace] = useState([]);
  const [count, setCount] = useState(0);

  const [currtenPage, setCurrentPage] = useState(0);
  // const [pageSize, setPageSize] = useState();
  const pages = Math.ceil(count / 6);

  useEffect(() => {
    fetch(
      `https://crud-server-ten.vercel.app/place?page=${currtenPage}&email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlace(data.place);
        setCount(data.count);
      });
  }, [currtenPage, user?.email]);

  return (
    <div>
      <h1 className="text-center text-5xl text-purple-500 mt-8">
        Welcome to our Travel Zone
      </h1>

      <div className=" w-4/5 m-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {place?.map((pl) => (
          <HomeCard key={pl._id} places={pl} count={count}></HomeCard>
        ))}
      </div>
      {/* <div className="text-3xl">current page {currtenPage + 1}</div> */}
      {pages > 1 && (
        <div className="container flex justify-center mx-auto my-8">
          <ul className="flex">
            <li>
              <button
                disabled={currtenPage === 0 ? true : false}
                onClick={() => setCurrentPage(currtenPage - 1)}
                className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
              >
                Prev
              </button>
            </li>
            {[...Array(pages)?.keys()].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={` ${
                    page === currtenPage && "bg-blue-500 text-black font-bold"
                  }
                   h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 `}
                >
                  {page + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                disabled={currtenPage > pages - 2 ? true : false}
                onClick={() => setCurrentPage(currtenPage + 1)}
                className="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
