import React from "react";

const RecentActivites = () => {
    return(
        <>
            <div className="bg-white float-left w-[27vw] ml-[215px] mt-8 h-auto pt-1 pb-6 shadow-md shadow-gray-400 rounded-sm px-4">
                <p className="text-[13px] font-bold px-2 pt-2">Recent Activites</p>
                <div className="flex space-x-11">
                    <p className="text-[10px] text-gray-500 normal-case py-5 px-2">42 Minutes ago</p>
                    <div className="flex gap-4 pt-2">
                        <div className="bg-[#757ae3] w-10 h-10 rounded-full text-center text-white">
                            <i className="fa-solid fa-gift pt-3"></i>
                        </div>
                        <div className="font-bold text-[10px] pt-1">
                            <p>Task Updated</p>
                            <p>Nikolai Updated a Task</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-18">
                    <p className="text-[10px] text-gray-500 normal-case py-5 px-2">1 Day ago</p>
                    <div className="flex gap-4 pt-2">
                        <div className="bg-[#f17493] w-10 h-10 rounded-full text-center text-white">
                            <i className="fa-solid fa-gear pt-3"></i>
                        </div>
                        <div className="font-bold text-[10px] pt-1">
                            <p>Deal Added</p>
                            <p>Panshi Updated a Task</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-11">
                    <p className="text-[10px] text-gray-500 normal-case py-5 px-2">42 Minutes ago</p>
                    <div className="flex gap-4 pt-2 mr-3">
                        <div className="bg-blue-500 w-10 h-10 rounded-full text-center text-white">
                            <i className="fa-solid fa-globe pt-3"></i>
                        </div>
                        <div className="font-bold text-[10px] pt-1">
                            <p>Published Article</p>
                            <p>Rashel Public Article</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-18">
                    <p className="text-[10px] text-gray-500 normal-case py-5 px-2">1 Day ago</p>
                    <div className="flex gap-4 pt-2">
                        <div className="bg-yellow-400 w-10 h-10 rounded-full text-center text-white">
                            <i className="fa-solid fa-gauge pt-3"></i>
                        </div>
                        <div className="font-bold text-[10px] pt-1">
                            <p>Dock Updated</p>
                            <p>reshmi Updated a Doc</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-[10px] text-gray-500 normal-case py-5 px-2">1 Day ago</p>
                    <div className="flex gap-4 pt-2">
                        <div className="bg-[#51a140] w-10 h-10 rounded-full text-center text-white">
                            <i class="fa-solid fa-star pt-3"></i>
                        </div>
                        <div className="font-bold text-[10px] pt-1">
                            <p>Replied Comment</p>
                            <p>jenathonAdded a Comment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentActivites;