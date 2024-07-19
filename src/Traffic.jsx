import React from "react";
import traffic_img from "./assets/circle.png";

const Traffic = () => {
    return (
        <>
            <div className="bg-white float-right w-[25vw] mt-5 mr-6 h-auto pt-1 shadow-lg rounded-sm px-4">
                <p className="font-bold text-sm pt-1">Traffic</p>
                <div className="flex justify-center pt-2 pb-4">
                    <img src={traffic_img} className="h-60"/>
                </div>
                <div className="flex justify-between pl-7 pb-2.5">
                    <div>
                        <p className="font-bold text-xl">34%</p>
                        <div className="flex pt-0.5">
                            <p className="bg-orange-500 w-2.5 h-2.5 rounded-full mt-1 mr-1"></p>
                            <p className="text-xs text-gray-400">facebook</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-xl">55%</p>
                        <div className="flex pt-0.5">
                            <p className="bg-blue-500 w-2.5 h-2.5 rounded-full mt-1 mr-1"></p>
                            <p className="text-xs text-gray-400">youtube</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-xl">11%</p>
                        <div className="flex pt-0.5">
                            <p className="bg-yellow-400 w-2.5 h-2.5 rounded-full mt-1 mr-1"></p>
                            <p className="text-xs text-gray-400">direct search</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Traffic;