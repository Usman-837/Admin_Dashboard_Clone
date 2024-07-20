import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Traffic from "./Traffic";
import Status from "./Status";
import RecentActivites from "./RecentActivities";
import OverviewStatus from "./OverviewStatus";

const App = () => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <Dashboard/>
    <Traffic/>
    <Status/>
    <RecentActivites/>
    <OverviewStatus/>
    </>
  );
};

export default App;
