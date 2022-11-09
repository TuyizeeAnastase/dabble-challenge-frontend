import React, { useEffect, useState } from "react";
import { UPDATE_POST } from "../../graphQl/Mutation";
import { useMutation, useQuery } from "@apollo/client";

export const EditForm = ({ setShowEditForm }, props) => {
  const [updateCountry, { updateError }] = useMutation(UPDATE_POST);
  const [id, setId] = useState(null);
  const [country_name, setCountry_name] = useState(null);
  const [area, setArea] = useState(null);
  const [year, setYear] = useState(null);
  const [total_population, setTotal_population] = useState(null);
  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setCountry_name(localStorage.getItem("country_name"));
    setArea(localStorage.getItem("area"));
    setYear(localStorage.getItem("year"));
    setTotal_population(localStorage.getItem("total_population"));
  }, {});
  if (updateError) return "Error";
  const updatingCountry = () => {
    updateCountry({
      variables: {
        _id: id,
        country_name: country_name,
        area: parseInt(area),
        year: year,
        total_population: parseInt(total_population),
      },
    });
    window.location.reload();
  };
  return (
    <form className="w-full max-w-lg border sm:rounded-lg -mt-24 mx-96 border-slate-300 modal_style">
      <div className="bg-blue-500">
        <p className="text-white font-bold py-2 mx-8">
          Edit Country Information
        </p>
      </div>
      <div className="flex flex-wrap mx-3 mb-6 mt-2">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-countrt"
          >
            Country
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-country"
            type="text"
            placeholder={country_name}
            onChange={(e) => setCountry_name(e.target.value)}
          />
          <p className="text-gray-600 text-xs italic">Please enter country</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-year"
          >
            Year
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-year"
            type="text"
            placeholder={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-area"
          >
            Area
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-area"
            type="number"
            placeholder={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Total Population
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="number"
            placeholder={total_population}
            onChange={(e) => setTotal_population(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center  border-teal-500 py-2 mx-6">
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => updatingCountry()}
        >
          Submit
        </button>
        <button
          onClick={() => setShowEditForm(false)}
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
