import React from "react";

const OverviewStatus = () => {
    return (
        <>
         <div className="bg-white float-right w-[53vw] ml-2 mr-6 mt-8 h-auto pt-1 px-2 shadow-md shadow-gray-400 rounded-sm">
            <p className="text-[13px] font-bold px-2 pt-2">Overview Status</p>
            <p className="text-xs px-2 text-gray-500 pt-2">overview of latest months</p>
            <div className="px-2 py-5 flex justify-between">
                <div>
                    <button className="bg-[#ff6421] text-white text-sm px-3 py-1.5 rounded-sm"><i className="fa-sharp fa-solid fa-plus"></i> Add</button>
                    <i className="fa-solid fa-cart-plus bg-[#edf5f8] p-2 px-3 ml-1 rounded-sm"></i>
                    <i className="fa-solid fa-trash bg-[#edf5f8] p-2 px-3 ml-1 rounded-sm"></i>
                    <i className="fa-sharp fa-solid fa-dumpster-fire bg-[#edf5f8] p-2 px-3 ml-1 rounded-sm"></i>
                </div>
                <div>
                    <input type="text" placeholder="Search" className="bg-[#edf5f8] p-1.5 px-3 ml-1 rounded-sm text-sm text-black"/>
                    <i className="fa-solid fa-circle-minus bg-[#edf5f8] p-2 px-3.5 ml-1 rounded-sm"></i>
                </div>
            </div>
            <div className="px-2 pb-7">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#edf5f8] flex justify-around gap-25 px-4 py-2.5 text-[13px]">
                            <th className="uppercase">innvoice</th>
                            <th className="uppercase">customers</th>
                            <th className="uppercase">from</th>
                            <th className="uppercase">price</th>
                            <th className="uppercase">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex justify-between px-4 text-sm py-8 text-gray-700">
                            <td>12386</td>
                            <td className="ml-10">charly dues</td>
                            <td className="ml-4">brazil</td>
                            <td>$299</td>
                            <td className="bg-[#f33b26] text-white p-2 px-4 rounded-sm">process</td>
                        </tr>
                        <tr className="flex justify-between px-4 text-sm text-gray-700">
                            <td>12345</td>
                            <td className="ml-12">marko</td>
                            <td className="ml-10">italy</td>
                            <td>$2642</td>
                            <td className="bg-[#46a138] text-white p-2 px-4 rounded-sm">open</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
        </>
    );
};

export default OverviewStatus;