import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CardDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const places = useLoaderData();
  const { photoUrl, place, description, _id } = places;

  const handleDelete = (id) => {
    const aggree = window.confirm("Are you sure ? You want to delete this?");
    if (!aggree) {
      return;
    } else {
      fetch(`https://crud-server-ten.vercel.app/place/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Deleted successfully !!");
            navigate("/home");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="p-10">
      <div className=" w-full lg:max-w-full lg:flex">
        <div
          className="  lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Mountain"
        >
          <img src={photoUrl} alt="" className="h-full w-96" />
        </div>
        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl my-2">{place}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex items-center justify-end">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={photoUrl}
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{user?.displayName}</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-info btn-sm ml-5">Update</button>
            </Link>
            <Link to={`/cheekout/${_id}`}>
              <button className="btn btn-sm btn-secondary ml-5">
                Order Now
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm ml-5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
