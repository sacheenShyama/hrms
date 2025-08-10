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

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Sidebar> */}
      <Route element={<Layout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/employee" element={<Employees />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/profile" element={<Profile />} />{" "}
      </Route>
      {/* </Sidebar> */}
      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            {" "}
            <Dashboard />{" "}
          </PrivateRoute>
        }
      />
      <Route
        path="employees"
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
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            {" "}
            <Profile />{" "}
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRouter;
