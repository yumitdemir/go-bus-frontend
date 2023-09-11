import React, {useState} from 'react';
import {HiMenuAlt3} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import { MdOutlineDashboard} from "react-icons/md";
import {TbBusStop, TbLetterD} from "react-icons/tb";
import {BsFillBusFrontFill} from "react-icons/bs";
import {BiLogOutCircle, BiSolidDiscount, BiTrip} from "react-icons/bi";
import {HiMiniTicket} from "react-icons/hi2";
import {IoPeople} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";

function AdminSideBar(props) {
    const menus = [
        {name: "Dashboard", link: "/admin", icon: MdOutlineDashboard},
        {name: "Trips", link: "", icon: BiTrip,margin: true},
        {name: "Bus Terminals/Stops", link: "", icon: TbBusStop},
        {name: "Drivers", link: "admin/drivers", icon: TbLetterD,margin: true},
        {name: "Vehicles", link: "admin/vehicles", icon: BsFillBusFrontFill},
        {name: "Promos", link: "", icon: BiSolidDiscount, margin: true},
        {name: "Tickets", link: "", icon: HiMiniTicket},
        {name: "Admins", link: "", icon: IoPeople,margin: true},
        {name: "Profile", link: "", icon: CgProfile},
        {name: "Logout", link: "", icon: BiLogOutCircle,margin: true},

    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <section className="flex gap-6 h-100  z-50 overflow-hidden  ">
            <div
                className={`bg-[#0e0e0e] min-h-screen ${
                    isOpen ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!isOpen)}
                    />
                </div>
                <NavLink
                    to={"/"}
                    className={
                        "flex w-full relative justify-start gap-3.5 p-2 "
                    }
                >
                    <img
                        src="/src/assets/img/logo-nav.svg"
                        alt=""
                        className="w-max-[100%] outline-2 outline-white"
                    />
                    <div/>
                </NavLink>
                <div className="mt-4 flex flex-col gap-4 ">
                    {menus?.map((menu, i) => (
                        <NavLink
                            to={`${menu.link}${menu.search ? menu.search : ''}`}
                            key={i}
                            className={({isActive}) =>
                                isActive
                                    ? `${
                                        menu?.margin && "mt-5"
                                    } bg-gray-800 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-lg`
                                    : `${
                                        menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-lg`
                            }
                            end
                        >
                            <div>
                                {React.createElement(menu?.icon, {
                                    size: "20",
                                })}
                            </div>
                            <h2
                                className={` ${
                                    !isOpen &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${
                                    isOpen && "hidden"
                                } absolute  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AdminSideBar;