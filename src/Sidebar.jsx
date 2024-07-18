import React from "react";
import logo from "./assets/logo.png";

const Sidebar = () => {
    return(
        <>
        <div className="bg-[#071539] w-[14vw] h-[150vh] absolute">
            {/* logo */}
            <div className="flex gap-2 pt-4 ml-4">
                <a href="#"><img src={logo} className="w-[40px] h-[40px]"/></a>
                <h1 className="text-white text-3xl font-bold pt-1">lector.</h1>
            </div>
            {/* Side Menu */}
            <div className="flex flex-col text-white pt-7 ml-6">
                <a href="#"><i className="fa-solid fa-house pr-5"></i>dashboard</a>
                <a href="#"><i className="fa-solid fa-house pr-5 pt-6"></i>widgets</a>
                <a href="#"><i className="fa-brands fa-elementor pr-5 pt-6"></i>UI Elements</a>
                <a href="#"><i className="fa-brands fa-uikit pr-5 pt-6"></i>Advance UI</a>
                <a href="#"><i className="fa-brands fa-wpforms pr-5 pt-6"></i>Form Elements</a>
                <a href="#"><i className="fa-regular fa-newspaper pr-5 pt-6"></i>Editors</a>
                <a href="#"><i className="fa-brands fa-rocketchat pr-5 pt-6"></i>Chats</a>
                <a href="#"><i className="fa-solid fa-table-list pr-5 pt-6"></i>Tables</a>
                <a href="#"><i className="fa-solid fa-fire pr-5 pt-6"></i>Popus</a>
                <a href="#"><i className="fa-solid fa-bell pr-5 pt-6"></i>Notification</a>
                <a href="#"><i className="fa-solid fa-house pr-5 pt-6"></i>widgets</a>
                <a href="#"><i className="fa-brands fa-elementor pr-5 pt-6"></i>UI Elements</a>
                <a href="#"><i className="fa-brands fa-uikit pr-5 pt-6"></i>Advance UI</a>
                <a href="#"><i className="fa-brands fa-wpforms pr-5 pt-6"></i>Form Elements</a>
                <a href="#"><i className="fa-regular fa-newspaper pr-5 pt-6"></i>Editors</a>
                <a href="#"><i className="fa-brands fa-rocketchat pr-5 pt-6"></i>Chats</a>
                <a href="#"><i className="fa-solid fa-table-list pr-5 pt-6"></i>Tables</a>
                <a href="#"><i className="fa-solid fa-fire pr-5 pt-6"></i>Popus</a>
                <a href="#"><i className="fa-solid fa-bell pr-5 pt-6"></i>Notification</a>
            </div>
        </div>
        </>
    );
};

export default Sidebar; 