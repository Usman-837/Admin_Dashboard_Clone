import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between bg-white h-[9vh] float-right w-[86vw] pt-6 pl-11 pr-9">
                <div className="text-gray-500 text-xl">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div>
                    <i className="fa-solid fa-bell text-gray-500 pr-3"></i>
                    <sup className="bg-blue-400 rounded-full pt-2 pb-2 text-white p-[4px] text-[9px] absolute top-5 right-[114px]">3</sup>
                    <i class="fa-solid fa-envelope text-gray-500 pr-4"></i>
                    <sup className="bg-red-500 rounded-full pt-2 pb-2 text-white p-[4px] text-[9px] absolute top-5 right-[84px]">2</sup>
                    <i className="fa-solid fa-user pr-3"></i>
                    <i className="fa-solid fa-gear text-gray-500"></i>
                </div>
            </nav>
        </>
    );
};

export default Navbar;