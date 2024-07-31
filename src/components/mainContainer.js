import React from "react";
import {
  FaArrowLeft,
  FaChevronDown,
  FaBell,
  FaArrowRight,
  FaFilter,
} from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import { MdDashboardCustomize } from "react-icons/md";
import ".././index.css";

const MainContainer = () => {
  return (
    <div className="flex flex-col items-start p-8 w-80 h-screen ">
      <div className="flex items-center  mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-white  rounded-full flex items-center justify-center">
          <FaArrowLeft className="text-custom-light-blue text-xl" />
        </div>
        <div className="ml-4">
          <h2 className="text-3xl font-bold">Incidents.</h2>
        </div>

        <div className="flex ml-[610px] space-x-6 ">
          <div className="w-50 h-12  flex justify-center items-center bg-white rounded-full shadow-md whitespace-nowrap pr-8  ">
            <div className="flex-shrink-0 w-10 h-10 bg-slate-950 rounded-full flex items-center justify-center text-xl text-white">
              B
            </div>
            <div className="ml-2">Non Bio Medical</div>
          </div>

          <div className="w-50 h-12  flex justify-center items-center bg-white  rounded-full shadow-md whitespace-nowrap pr-4 pl-4 ">
            <div className="pr-4">Vijayanagar</div>
            <div className="ml-4">
              <FaChevronDown className="text-black" />
            </div>
          </div>
          <div className="flex-shrink-0 w-12 h-12 bg-white shadow rounded-full flex items-center justify-center">
            <MdDashboardCustomize className="text-2xl" />
          </div>

          <div className="flex-shrink-0 w-12 h-12 bg-white shadow  rounded-full flex items-center justify-center">
            <FaBell className="text-black text-2xl" />
          </div>

          <div className="flex-shrink-0 w-12 h-12 text-xl text-white bg-black shadow  rounded-full flex items-center justify-center ">
            A
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-4 space-x-3 pt-2">
        <div className="w-[460px] h-[123px] bg-white shadow-md flex  flex-col  px-6 py-2">
          <div className="text-4xl text-custom-light-blue font-bold">04</div>
          <div className="flex flex-row  flex-grow mt-6">
            <span className="font-semibold text-2xl">Incident reported</span>
            <FaArrowRight className="text-black text-xl ml-[190px] mt-2" />
          </div>
        </div>
        <div className="w-[460px] h-[123px] bg-white shadow-md flex  flex-col  px-6 py-2">
          <div className="text-4xl text-custom-light-blue font-bold">06</div>
          <div className="flex flex-row  flex-grow mt-6">
            <span className="font-semibold text-2xl">Check In</span>
            <FaArrowRight className="text-black text-xl ml-[280px] mt-2" />
          </div>
        </div>
        <div className="w-[460px] h-[123px] bg-white shadow-md flex  flex-col  px-6 py-2">
          <div className="text-4xl text-custom-light-blue font-bold">03/06</div>
          <div className="flex flex-row  flex-grow mt-6">
            <span className="font-semibold text-2xl">Services open</span>
            <FaArrowRight className="text-black text-xl ml-[230px] mt-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-4 space-x-3 pt-5">
        <div className="w-[930px] h-[75px] bg-white shadow-md flex items-center justify-between px-4 py-2">
          <div className="flex justify-center items-center text-lg">
            <IoIosSearch />
            <input
              className="ml-3 outline-none border-b border-gray-100 placeholder-gray-300"
              placeholder="Search"
            />
            <div className="flex space-x-24 ml-10">
              <div className="flex justify-end items-center text-lg font-semibold">
                September
                <IoIosArrowDown className="mt-2 ml-2" />
              </div>
              <div className="flex justify-end items-center text-lg font-semibold">
                2024
                <IoIosArrowDown className="mt-2 ml-2" />
              </div>
              <div className="flex justify-end items-center text-lg font-semibold">
                <FaFilter />
              </div>
              <div className="flex justify-end items-center text-lg font-semibold">
                <LuArrowDownUp />
              </div>
              <div className="flex justify-end items-center text-xl font-semibold ">
                <AiOutlineDownload />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[460px] h-[75px] bg-white shadow-md flex items-center justify-between px-4 py-2">
          <div className="w-[390px] h-12  flex justify-center font-medium items-center rounded-3xl bg-custom-light-blue shadow-md whitespace-nowrap pr-10 ml-48 text-white">
            Add Incident
            <div className="ml-4">
              <FaPlus className="ml-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-4 space-x-3 pt-3">
        <div className="w-[1400px] h-[460px] bg-white shadow-md flex flex-col px-4 py-2">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Asset
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold  text-black-500  tracking-wider">
                    Down Time
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-base font-bold text-black-500  tracking-wider">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-custom-light-blue">
                    Cleared
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl text-black font-medium">
                    <AiOutlineDownload />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white ">
                    <div className="w-50 h-12  flex justify-center items-center bg-custom-orange rounded-full shadow-md whitespace-nowrap pr-4">
                      Open
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-custom-light-blue">
                    Cleared
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl text-black font-medium">
                    <AiOutlineDownload />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-white">
                    <div className="w-50 h-12  flex justify-center items-center bg-custom-orange rounded-full shadow-md whitespace-nowrap pr-4 ">
                      Open
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-custom-light-blue">
                    Cleared
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl text-black font-medium">
                    <AiOutlineDownload />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    Ge ECG Machine
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    AG-7645698
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    Blood Center
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    03/04/2023 @ 12.30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-black font-medium">
                    10 hr : 24 m : 32 s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-custom-light-blue">
                    Cleared
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl  text-black font-medium ">
                    <AiOutlineDownload />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
