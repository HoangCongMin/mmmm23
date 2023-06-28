"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

// import ThemeToggler from "./ThemeToggler";
import LanguageToggle from "./LanguageToggle";
import menuData from "./menuData";
import menuMobileBg from "@/public/images/menu/map_menu.jpg"

import { GetMenuData,GetLanguage } from "../../apis/GetDataHome";

import { handleItemNavBar } from "../../utils/util";
import {useTranslations} from 'next-intl';



const Header = ({title}) => {
  console.log(title)
  
  const [data,setData]=useState([]);
  const [languageData,setLanguageData]=useState([]);

  const setdata = async () => {
    try {
      const res = await GetMenuData();
      const resLanguage = await GetLanguage();
      setData(res.data);
      setLanguageData(resLanguage.data)
      // setLoalstore(resLanguage.data)
    } catch (error) {
      console.log(error);
    }
  };

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
    document.querySelector('body').classList.toggle('NavOpen')
  };

  const [userClose, setUserClose] = useState(false);
  const userToggleHandler = () => {
    setUserClose(!userClose);
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    setdata()
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    console.log(openIndex)
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        id="Header"
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-[green] dark:!bg-opacity-20"
            : "absolute"
        } h-[${72}px]`}
      >
        <div className="w-full px-[20px]">
          <div className={`relative -mx-4 flex items-center justify-between ${sticky ? "animate-fadeInUp" : "py-0"}`}>
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="inline-block rounded-lg px-4 focus:color-[green] xl:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0 " : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>
            <div className="w-[350px] md:w-[300px] max-w-full px-4 xl:mr-[30px]">
              <Link
                href="/"
                className="header-logo inline-block w-full"
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={350}
                  height={49}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <nav
              id="navbarCollapse"
              className={`max-[1200px]:overflow-y-auto bg-nav-mobile xl:bg-none navbar fixed top-[60px] xs:top-[80px] md:top-[90px] lg:top-[100px] right-0 bottom-0 z-30 ease border-body-color/50 bg-white px-4 py-4 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                navbarOpen
                  ? "visibility left-[0] opacity-100"
                  : "invisible left-[-100%] opacity-0"
              }`}
            >
              <ul className="block xl:flex items-center xl:space-x-[20px]">
                {data.map((menuItem, index) => (
                  <li key={menuItem.id} className="group relative">
                    {menuItem.title ? (
                      <>
                        {menuItem?.children.length > 0 ? (
                          <span
                          onClick={() => handleSubmenu(index)}
                            className={`w-full flex items-center justify-between py-3 text-base xl:text-[12px] 2xl:text-base text-white xl:text-dark group-hover:text-[green] cursor-pointer uppercase font-bold dark:text-white xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}
                          >
                            {menuItem.title}
                            <BsChevronDown className="ml-[7px] text-[10px] font-bold"/>
                          </span>
                        ) : (
                          <Link
                         
                            href={`/${handleItemNavBar(
                              menuItem.multiple_language
                            )}`}
                            className={`flex py-2 text-base xl:text-[12px] 2xl:text-base text-white xl:text-dark group-hover:text-[green] cursor-pointer uppercase font-bold dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 pointer`}
                          >
                            {menuItem.title}
                          </Link>
                        )}

                        {menuItem?.children.length > 0 && (
                          <div
                            className={`submenu relative top-full left-0 rounded-md pl-[20px] bg-none xl:bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem?.children.map((submenuItem) => (
                              <Link
                              onClick={navbarToggleHandler}

                                href={`/${handleItemNavBar(
                                  menuItem.multiple_language
                                )}/${submenuItem.first_id === -1 ?String(submenuItem.id): String(submenuItem.first_id)}`}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-white xl:text-dark hover:text-[green] font-semibold dark:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <a
                          onClick={() => handleSubmenu(index)}
                          className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="15" height="14" viewBox="0 0 15 14">
                              <path
                                d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center justify-end px-4">
              <button
                onClick={userToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block text-[green] 2xl:hidden"
              ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></button>
              <div className={`absolute top-full right-0 p-[15px] opacity-0 transition ease duration-300 shadow-lg rounded-md bg-[white] 2xl:static 2xl:bg-[transparent] 2xl:shadow-none 2xl:p-0 2xl:flex 2xl:opacity-100 ${userClose?" opacity-100":""}`}>
                <Link
                  href="/signin"
                  className="hidden py-3 px-7 text-base text-center font-bold text-dark hover:text-[green] dark:text-white md:block"
                >
                  {title}
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-[green] py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                 
                  Đăng nhập
                </Link>
              </div>
              <div>
                {/* <ThemeToggler /> */}
                <LanguageToggle languageData={languageData}/>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;