import React from "react";
import blue_graph from "./assets/blue-graph-lines.png";
import yello_graph from "./assets/yello-graph lines.png";
import red_graph from "./assets/red-graph-lines.png";

const Status = () => {
    return (
        <>
        <div>
            {/* Revenue Status */}
            <div className="float-left w-66 bg-[#b3c5e2] h-36 ml-[215px] mt-5 rounded-md py-5">
                <p className="text-xs font-bold px-6">revenue status</p>
                <div className="flex">
                    <img src={blue_graph}/>
                    <div className="pt-6">
                        <p className="font-bold text-2xl text-[#3ea3ee]">$432</p>
                        <p className="text-xs pt-2">jan 01 - jan 10</p>
                    </div>
                </div>
            </div>
            {/* Page View */}
            <div className="float-left w-66 bg-[#f5e7bd] h-36 ml-5 mt-5 rounded-md py-5">
                <p className="text-xs font-bold px-6">page view</p>
                <p className="font-bold text-2xl text-[#edc742] px-6 pt-1">$432</p>
                <img src={yello_graph} className="mt-2.5"/>        
            </div>
            {/* Bounce Rate */}
            <div className="float-left w-66 bg-[#f3d5c9] h-36 ml-5 mt-5 rounded-md py-5">
                <p className="text-xs font-bold px-6">bounce rate</p>
                <p className="font-bold text-2xl text-[#e27b55] px-6 pt-1">$432</p>
                <div className="flex ml-5">
                    <p className="bg-white py-1 w-16 h-7 text-xs text-center rounded mt-7">monthly</p>
                    <img src={red_graph} className="mt-1"/>
                </div>        
            </div>
              {/* Revenue Status */}
              <div className="float-left w-66 bg-[#b3c5e2] h-36 ml-5 mt-5 rounded-md py-5">
                <p className="text-xs font-bold px-6">revenue status</p>
                <div className="flex">
                    <img src={blue_graph}/>
                    <div className="pt-6">
                        <p className="font-bold text-2xl text-[#3ea3ee]">$432</p>
                        <p className="text-xs pt-2">jan 01 - jan 10</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Status;