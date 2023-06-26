import Link from "next/link";
import Image from "next/image";


const Introduction = ({
pageName,
description,
showLink = true,
intoLink= "#",
quoteLink= "/Contact",
metaImage= "",
fontFamily= "",
fontTitle="",
fontDescription=""
}: {
pageName: string;
description?: string;
renderHTML?:string;
imageWidth?: string;
showLink?: boolean;
intoLink?: string;
quoteLink?: string;
metaImage?: string;
fontFamily?: string,
fontTitle?: string;
fontDescription?: string;
}) => {
return (
    <>
    <section id="introduction" className={`relative z-10 overflow-hidden py-10 mt-28 lg:mt-[113px] bg-[linear-gradient(45deg,_#53b700,_#00c1bf)] dark:bg-none ${ fontFamily}`}>
        <div className="flex items-center">

        <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-8/12">
                <div className=" max-w-[570px] md:mb-0 ">
                    <h1 className={`text-2xl font-bold text-white sm:text-3xl ${fontTitle}`}>{pageName}</h1>
                    <p className={`mt-[20px] text-base font-medium leading-relaxed text-white ${fontDescription}`}>{description}</p>
                    {showLink &&
                        <div className="text-base !leading-relaxed text-body-color mt-[50px]">
                            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Link
                                href={intoLink}
                                className="rounded-md bg-[green] py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[green]/80"
                            >
                                Giới thiệu
                            </Link>
                            <Link
                                href={quoteLink}
                                className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                            >
                                Bảng giá
                            </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-4/12">
                <Image
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    src={metaImage}
                />
            </div>
        </div>
        </div>

        <div>
        <span className="absolute top-0 left-0 z-[-1]">
            <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
            />
            <defs>
                <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
            </defs>
            </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
            <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
            />
            <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
            />
            <defs>
                <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
            </defs>
            </svg>
        </span>
        </div>
        </div>
    </section>
    </>
);
};

export default Introduction;
