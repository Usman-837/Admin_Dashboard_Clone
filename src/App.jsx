import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Traffic from "./Traffic";
import Status from "./Status";
import RecentActivites from "./RecentActivities";

const App = () => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <Dashboard/>
    <Traffic/>
    <Status/>
    <RecentActivites/>
    </>
  );
};

export default App;
