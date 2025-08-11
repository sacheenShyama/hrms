import React, { useEffect, useState } from "react";

const EmployeeTable = ({ empData }) => {
  const [pathname, setPathname] = useState();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return (
    <div className="relative overflow-x-auto border border-gray-200 mt-8 p-4 rounded-xl">
      <div className="flex justify-between">
        <p className="text-xl font-bold">
          {pathname === "/employee" ? "Employees List" : "Leave Requests"}
        </p>

        <input
          type="text"
          placeholder="Search here"
          className="border border-gray-300 rounded-xl px-1"
        />
        {pathname === "/employee" && (
          <button className="font-bold text-green-600">Add Employee</button>
        )}
      </div>

      <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Full Name & Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Mobile Number
            </th>
            <th scope="col" className="px-6 py-3">
              {pathname === "/employee" ? "Join Date" : "Leave Date"}
            </th>
            <th scope="col" className="px-6 py-3">
              {pathname === "/employee" ? "status" : "Leave type"}
            </th>

            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {empData &&
            empData.map((data) => {
              return (
                <tr
                  key={data.id}
                  className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.name} <br />
                    <span className="text-xs text-gray-500">{data.email}</span>
                  </td>
                  <td className="px-6 py-4"> {data.role}</td>
                  <td className="px-6 py-4"> {data.Department}</td>
                  <td className="px-6 py-4">{data.mobile}</td>
                  <td className="px-6 py-4">
                    {pathname === "/employee" ? data.join : data.leavedates}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      {pathname === "/employee" ? data.status : data.leavetype}
                    </span>
                  </td>
                  {pathname === "/employee" ? (
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline mr-2">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  ) : (
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline mr-2">
                        Accept
                      </button>
                      <button className="text-red-600 hover:underline">
                        Reject
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
