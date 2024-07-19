import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Traffic from "./Traffic";
import Status from "./Status";

const App = () => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <Dashboard/>
    <Traffic/>
    <Status/>
    </>
  );
};

export default App;
