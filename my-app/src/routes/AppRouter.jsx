import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import LeaveRequest from "../pages/LeaveRequest";
import Profile from "../pages/Profile";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Signup from "../pages/Signup";
// import { useDispatch } from "react-redux";
// import {
//   handleGoogleRedirectResult,
//   listenForAuthChanges,
// } from "../redux/service/firebaseAuth";

const AppRouter = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   handleGoogleRedirectResult();
  //   listenForAuthChanges();
  // }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Sidebar> */}
      <Route element={<Layout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/employee" element={<Employees />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/profile" element={<Profile />} />{" "} */}
        {/* </Sidebar> */}
        {/* <Route
        path="/"
        element={
          <PrivateRoute>
            {" "}
            <Dashboard />{" "}
          </PrivateRoute>
        }
      /> */}
        <Route
          path="employee"
          element={
            <PrivateRoute>
              {" "}
              <Employees />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/leaveRequest"
          element={
            <PrivateRoute>
              {" "}
              <LeaveRequest />{" "}
            </PrivateRoute>
          }
        />
        {/* <Route
        path="/profile"
        element={
          <PrivateRoute>
            {" "}
            <Profile />{" "}
          </PrivateRoute>
        }
      /> */}{" "}
      </Route>
    </Routes>
  );
};

export default AppRouter;
