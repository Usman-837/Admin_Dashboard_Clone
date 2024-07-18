import React from "react";
import logo from "./assets/logo.png";

const Sidebar = () => {
    return(
        <>
        <div className="bg-[#071539] w-[15vw] h-[150vh]">
            {/* logo */}
            <div className="flex justify-center gap-2 pt-4">
                <a href="#"><img src={logo} className="w-[40px] h-[40px]"/></a>
                <h1 className="text-white text-3xl font-bold pt-1">lector.</h1>
            </div>
        </div>
        
        </>
    );
};

export default Sidebar; 