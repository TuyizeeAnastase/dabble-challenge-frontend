import React, { useState } from "react";
import { Form } from "./Model/Form";
import { EditForm } from "./Model/EditForm";
import { useQuery, useMutation } from "@apollo/client";
import { getAllCountries } from "../graphQl/Query";
import { DELETE_COUNTRY } from "../graphQl/Mutation";
import { Addbtn } from "./Addbtn";
import {TableHeader} from "./TableHeader";

export const Datatable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { loading, error, data } = useQuery(getAllCountries);
  const [deleteCountry, { err }] = useMutation(DELETE_COUNTRY);
  const setData = (data) => {
    let { _id, country_name, year, area, total_population } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("country_name", country_name);
    localStorage.setItem("area", area);
    localStorage.setItem("year", year);
    localStorage.setItem("total_population", total_population);
  };
  if(err) return "err"
  const remove = (id, country) => {
    let answer = window.confirm(
      `Are you sure ? you want to delete record for ${country}.`
    );
    if (answer) {
      deleteCountry({ variables: { deleteCountryId: id } });
      window.location.reload();
    }
  };
  if (error)
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          Error whiling Loading data,Please check your network.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  if (loading)
    return (
      <div
        className="bg-blue-500 border border-white text-white px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          Information is Loading,Please check your network.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-blue-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  return (
    <>
      <Addbtn setShowModal={setShowModal} />
      <TableHeader data={data}/>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-18 mx-60">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="w-full bg-blue-500 text-white text-sm text-left  dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                Year
              </th>
              <th scope="col" className="py-3 px-6">
                Area
              </th>
              <th scope="col" className="py-3 px-6">
                Population
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.getCountries.map((data) => (
              <tr
                key={data._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.country_name}
                </th>
                <td className="py-4 px-6">{data.year}</td>
                <td className="py-4 px-6">{data.area} km(square)</td>
                <td className="py-4 px-6">{data.total_population} pop</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => (setShowEditForm(true), setData(data))}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(data._id, data.country_name)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditForm ? (
        <>
          <EditForm setShowEditForm={setShowEditForm} />
        </>
      ) : null}
      {showModal ? (
        <>
          <Form setShowModal={setShowModal} />
        </>
      ) : null}
    </>
  );
};
