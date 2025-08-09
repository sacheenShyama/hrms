import React from "react";

const EmployeeTable = () => {
  return (
    <div className="relative overflow-x-auto border border-gray-200 mt-8 p-4">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Employees List</p>

        <input
          type="text"
          placeholder="Search here"
          className="border border-gray-300 rounded-xl px-1"
        />
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
              Join Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              John Doe <br />
              <span className="text-xs text-gray-500">john@example.com</span>
            </td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">HR</td>
            <td className="px-6 py-4">+91 9876543210</td>
            <td className="px-6 py-4">01/01/2023</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jane Smith <br />
              <span className="text-xs text-gray-500">jane@example.com</span>
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">IT</td>
            <td className="px-6 py-4">+91 9123456789</td>
            <td className="px-6 py-4">05/03/2022</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                On Leave
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              John Doe <br />
              <span className="text-xs text-gray-500">john@example.com</span>
            </td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">HR</td>
            <td className="px-6 py-4">+91 9876543210</td>
            <td className="px-6 py-4">01/01/2023</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jane Smith <br />
              <span className="text-xs text-gray-500">jane@example.com</span>
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">IT</td>
            <td className="px-6 py-4">+91 9123456789</td>
            <td className="px-6 py-4">05/03/2022</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                On Leave
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              John Doe <br />
              <span className="text-xs text-gray-500">john@example.com</span>
            </td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">HR</td>
            <td className="px-6 py-4">+91 9876543210</td>
            <td className="px-6 py-4">01/01/2023</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jane Smith <br />
              <span className="text-xs text-gray-500">jane@example.com</span>
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">IT</td>
            <td className="px-6 py-4">+91 9123456789</td>
            <td className="px-6 py-4">05/03/2022</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                On Leave
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              John Doe <br />
              <span className="text-xs text-gray-500">john@example.com</span>
            </td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">HR</td>
            <td className="px-6 py-4">+91 9876543210</td>
            <td className="px-6 py-4">01/01/2023</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>

          <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Jane Smith <br />
              <span className="text-xs text-gray-500">jane@example.com</span>
            </td>
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">IT</td>
            <td className="px-6 py-4">+91 9123456789</td>
            <td className="px-6 py-4">05/03/2022</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                On Leave
              </span>
            </td>
            <td className="px-6 py-4">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
