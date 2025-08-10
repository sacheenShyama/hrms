import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOut } from "../redux/service/firebaseAuth";
import { useSelector } from "react-redux";
import { CgSpinner } from "react-icons/cg";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, loading } = useSelector((state) => state.auth);
  console.log("user", user);
  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        type="button"
        className=" p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <RiBarChartHorizontalLine />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/* Dashboard */}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            {/* Dropdown Menu */}
            <li>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ms-3 text-left whitespace-nowrap">
                  Directory
                </span>
                {isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
              </button>
              {isDropdownOpen && (
                <ul className="py-2 space-y-2">
                  <li>
                    <Link
                      to={"/employee"}
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className="flex items-center w-full p-2 pl-11 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Employee
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/leave-request"}
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className="flex items-center w-full p-2 pl-11 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Leave Request
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => logOut()}
                disabled={loading}
                className="ms-3 bg-black rounded-xl text-white px-4 py-1"
              >
                {loading ? (
                  <CgSpinner className="text-white text-xl animate-spin font-bold" />
                ) : (
                  "Log Out"
                )}
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
