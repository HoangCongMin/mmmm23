
"use client";
import { useState, useEffect } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { useSearchParams,useRouter,usePathname,useParams } from 'next/navigation'
import Link from 'next/link'


// import {setLoalstore} from'../../app/utils/common'

const LanguageToggle = ( languageData) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const pram=useParams()

  const pathname=usePathname()

  
  


  console.log(pathname)
  // const handleChangeLanguage = (code,e) => {
  //   e.preventDefault()
  //   router.push('/Products/2706',{title:code})
  //   console.log(searchParams)

  //   onClick={(e) => handleChangeLanguage(item.Code,e)}
  // }

  return (
    <div className="relative">
      <button
        onClick={() => setOpenDropDown(!openDropDown)}
        className="ml-[15px] cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
      >
        <FaEarthAsia/>
      </button>
      <ul className={`absolute min-w-[150px] transition right-0 bg-white p-3 rounded-[5px] shadow-sm text-left text-base ${openDropDown ? "top-[110%] opacity-0" : "top-[100%] opacity-100"}`}>
        {languageData?.languageData?.map((item, index) => {
          return (
            <Link href={{pathname:`${pathname}`,query: { keyword: `${item.Code}` }}} key={index} className="mb-[5px] cursor-pointer" locale={item.Code}>{item.Name}</Link>
          )
        })}
      </ul>
    </div>
  );
};

export default LanguageToggle;
