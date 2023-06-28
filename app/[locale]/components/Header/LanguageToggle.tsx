
"use client";
import { useState, useEffect } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { useSearchParams,useRouter,usePathname,useParams } from 'next/navigation'
import Link from 'next/link'


// import {setLoalstore} from'../../app/utils/common'

const LanguageToggle = ( languageData) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const pram=useParams();
  const pathname=usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropDown(!openDropDown)}
        className="ml-7 cursor-pointer items-center justify-center rounded-full text-black dark:text-white h-7 w-7"
      >
        <FaEarthAsia className="w-full h-full"/>
      </button>
      <ul className={`absolute transition-all ease-in-out duration-300 right-0 bg-white p-3 rounded-[5px] shadow-sm text-left text-base min-w-[150px] ${openDropDown ? "top-[115%] opacity-100 visible" : "top-[150%] opacity-0 invisible"}`}>
        {languageData?.languageData?.map((item, index) => {
          return (
            <li key={index} value={item.Code} className="mb-[5px]">
              <Link href={{pathname:`${pathname}`,query: { keyword: `${item.Code}` }}} className="mb-[5px] cursor-pointer" locale={item.IOSCode ? item.IOSCode : 'vi'}>{item.Name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default LanguageToggle;
