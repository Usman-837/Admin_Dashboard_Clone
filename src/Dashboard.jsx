import React from "react";

const Dashboard = () => {
    return (
        <>
        <div className="bg-white float-left w-[55vw] mt-5 h-auto ml-[215px] pt-1 shadow-lg rounded-sm">
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
                <div>
                    <table class="border-collapse border border-solid border-gray-400 w-96">
                        <tr>
                            <td class="border border-solid border-gray-400 p-2">1</td>
                            <td class="border border-solid border-gray-400 p-2">2</td>
                            <td class="border border-solid border-gray-400 p-2">3</td>
                            <td class="border border-solid border-gray-400 p-2">4</td>
                            <td class="border border-solid border-gray-400 p-2">5</td>
                        </tr>
                        <tr>
                            <td class="border border-solid border-gray-400 p-2">6</td>
                            <td class="border border-solid border-gray-400 p-2">7</td>
                            <td class="border border-solid border-gray-400 p-2">8</td>
                            <td class="border border-solid border-gray-400 p-2">9</td>
                            <td class="border border-solid border-gray-400 p-2">10</td>
                        </tr>
                    </table>
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