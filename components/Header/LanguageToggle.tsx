
"use client";
import { useState, useEffect } from "react";
import { FaEarthAsia } from "react-icons/fa6";

const LanguageToggle = (languageData) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropDown(!openDropDown)}
        className="ml-[15px] cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
      >
        <FaEarthAsia/>
      </button>
      <ul className={`absolute min-[200px] transition right-0 bg-white p-3 rounded-[5px] shadow-sm text-left text-base ${openDropDown ? "top-[110%] opacity-0" : "top-[100%] opacity-100"}`}>
        {languageData?.languageData?.map((item, index) => {
          return (
            <li key={index} value={item.Code} className="mb-[5px]">{item.Name}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default LanguageToggle;
