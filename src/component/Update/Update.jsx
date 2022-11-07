import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const prevDetails = useLoaderData();
  // const pl = useParams();
  // console.log(pl);

  const { price, place, description, photoUrl, _id } = prevDetails;

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const place = {
      place: form.spot.value,
      price: form.price.value,
      photoUrl: form.photoUrl.value,
      description: form.description.value,
    };
    fetch(`https://crud-server-ten.vercel.app/place/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(place),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("Updated successfully !!");
          navigate("/home");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="my-40">
        <form onSubmit={handleUpdate} className="max-w-2xl mx-auto">
          <label className="block mb-2 text-center text-2xl font-bold pb-7  text-gray-900 dark:text-gray-400">
            Update your info !!
          </label>

          <input
            type="spot"
            name="spot"
            className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Place"
            defaultValue={place}
            required
          ></input>
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Travel cost"
          ></input>
          <input
            type="text"
            name="photoUrl"
            defaultValue={photoUrl}
            className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Photo url"
          ></input>

          <textarea
            type="text"
            name="description"
            defaultValue={description}
            rows="4"
            className="block p-2.5 w-full textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description..."
          ></textarea>

          <div className="text-center">
            {" "}
            <button className="btn  btn-sm mt-6">Update info</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
