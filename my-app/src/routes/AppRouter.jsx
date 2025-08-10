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

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Layout />}>
        <Route
          path="/employee"
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
