import React from "react";
import graph from "./assets/graph-lines.png";

const Dashboard = () => {
    return (
        <>
        <div className="bg-white float-left w-[55vw] mt-5 h-auto ml-[215px] pt-1 shadow-md shadow-gray-400 rounded-sm">
            <div className="flex justify-between px-2">
                <div>
                    <p className="text-sm">dashboard</p>
                    <p className="text-gray-500 text-xs pt-[2px]">overview of latest month</p>
                </div>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <p className="font-bold border-b-4 border-solid border-red-400 text-black">DAILY</p>
                    <p>WEEKLY</p>
                    <p>MONTHLY</p>
                    <p>YEARLY</p>
                </div>
                <div className="flex lowercase text-gray-500 text-sm">
                    <div className="flex mr-7">
                        <p className="bg-blue-400 w-3 h-3 rounded-full mt-1 mr-1"></p>
                        <p>store</p>
                    </div>
                    <div className="flex">
                        <p className="bg-orange-400 w-3 h-3 rounded-full mt-1 mr-1"></p>
                        <p>store</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-2">
                <div className="pt-8">
                    <div>
                        <h1 className="font-bold text-2xl">$3468.96</h1>
                        <p className="text-xs text-gray-500">current month earning</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="font-bold text-2xl">82</h1>
                        <p className="text-xs text-gray-500">current month sales</p>
                    </div>
                    <div className="bg-[#fe5e15] w-36 p-2 rounded-sm mt-5">
                        <a href="#" className="text-xs text-white">last month summary</a>
                    </div>
                </div>
                <div className="text-gray-500 text-xs mt-4 space-y-3.5 ml-32">
                    <p>30</p>
                    <p>25</p>
                    <p>20</p>
                    <p>15</p>
                    <p>10</p>
                    <p>5</p>
                    <p>0</p>
                </div>
                <div className="text-gray-500 absolute flex left-[530px] top-80 mt-2 space-x-19  text-xs">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                </div>
                <div className="mt-5 mr-1">
                    <table class="border border-1 border-solid border-separate border-gray-300">
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr>
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr>
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr>
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr> 
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr>
                            <tr>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                                <th class="border border-1 border-solid border-gray-400 p-[13px] px-10"></th>
                            </tr>
                    </table>
                </div>
                <div className="absolute right-1/4 mr-16 top-52 w-[420px]">
                    <img src={graph}/>
                </div>
            </div>
            <div className="flex justify-between border-t-[0.5px] border-solid border-gray-400 mt-5 py-3 px-3">
                <div className="flex">
                    <div className="bg-[#f33923] w-12 h-12 rounded-full text-center text-white">
                        <i className="fa-solid fa-wallet pt-4"></i>
                    </div>
                    <div className="text-gray-500 text-sm pl-2 pt-1">
                        <p>wallet ballance</p>
                        <p className="font-bold text-black text-[16px] pt-1">$4,567.53</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#6075db] w-12 h-12 rounded-full text-center text-white">
                        <i class="fa-solid fa-arrows-rotate pt-4"></i>
                    </div>
                    <div className="text-gray-500 text-sm pl-2 pt-1">
                        <p>Refferel Earnings</p>
                        <p className="font-bold text-black text-[16px] pt-1">$1689.53</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#48a13a] w-12 h-12 rounded-full text-center text-white">
                        <i class="fa-solid fa-sign-hanging pt-4"></i>
                    </div>
                    <div className="text-gray-500 text-sm pl-2 pt-1">
                        <p>Eastimate Sales</p>
                        <p className="font-bold text-black text-[16px] pt-1">$2853.53</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#fd7397] w-12 h-12 rounded-full text-center text-white">
                        <i class="fa-solid fa-dollar-sign pt-4"></i>
                    </div>
                    <div className="text-gray-500 text-sm pl-2 pt-1">
                        <p>Earnings</p>
                        <p className="font-bold text-black text-[16px] pt-1">$52,567.53</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;