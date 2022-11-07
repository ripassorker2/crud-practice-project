import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const handleCreateProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const place = {
      place: form.place.value,
      price: form.price.value,
      photoUrl: form.photoUrl.value,
      description: form.description.value,
    };
    console.log(place);

    fetch("https://crud-server-ten.vercel.app/place", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(place),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Succesfully created spot !!");
          navigate("/home");
        } else {
          toast.error("Could not created the spot !!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-40">
      <form onSubmit={handleCreateProduct} className="max-w-2xl mx-auto">
        <label className="block mb-2 text-center text-2xl font-bold pb-7  text-gray-900 dark:text-gray-400">
          Write your place info !!
        </label>

        <input
          type="place"
          name="place"
          className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Place"
          required
        ></input>
        <input
          type="number"
          name="price"
          className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Travel cost"
        ></input>
        <input
          type="text"
          name="photoUrl"
          className="block p-2.5 w-full mb-5 textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Photo url"
        ></input>

        <textarea
          type="text"
          name="description"
          rows="4"
          className="block p-2.5 w-full textarea textarea-secondary text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description..."
        ></textarea>

        <div className="text-center">
          {" "}
          <button className="btn  btn-sm mt-6">Create spot</button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
