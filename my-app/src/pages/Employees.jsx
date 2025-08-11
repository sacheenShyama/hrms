import React, { useEffect } from "react";
import Charts from "../components/Charts";
import EmployeeTable from "../components/EmployeeTable";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../redux/service/employeeApi";

const Employees = () => {
  const { employee, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  console.log(employee);

  useEffect(() => {
    getEmployee(dispatch);
  }, [dispatch]);
  return (
    <div className="container m-auto">
      <div className=" w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border border-gray-200 p-2 rounded-xl min-h-[300px] w-full md:w-[65%]">
            <Charts />
          </div>
          <div className="border border-gray-200 p-4 rounded-xl min-h-[300px] w-full md:w-[35%]">
            <p className="text-xl font-bold">Top 3 Employee by Performance</p>
            <hr className="text-gray-200 mt-5" />
            <div>
              <p className="text-gray-400 mt-6">Miles morels</p>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-6 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-6 rounded-full"
                  style={{ width: "45%" }}
                ></div>{" "}
              </div>
              <p className="text-gray-400 mt-6">Sachin kumar</p>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-6 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-6 rounded-full"
                  style={{ width: "75%" }}
                ></div>{" "}
              </div>
              <p className="text-gray-400 mt-6">Thor</p>
              <div className="w-full mt-2 bg-gray-200 rounded-full h-6 dark:bg-gray-700">
                <div
                  className="bg-blue-500 h-6 rounded-full"
                  style={{ width: "65%" }}
                ></div>{" "}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <EmployeeTable empData={employee} />
    </div>
  );
};

export default Employees;
