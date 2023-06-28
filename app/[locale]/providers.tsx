"use client";

import { ThemeProvider } from "next-themes";
import { GetLanguage } from "../[locale]/apis/GetDataHome";

import { useState } from "react";
import { createContext } from "react";
// import { getLocalStorage } from "../app/utils/common";

// export interface AppContextInterface {
//   item_code?: string;
// }

// export const getInitialAppContext: () => AppContextInterface = () => ({
//   item_code: getLocalStorage(),
// });

// const initialAccess_token = getInitialAppContext();

// export const myCreateContext =
//   createContext<AppContextInterface>(initialAccess_token);

export function Providers({
  children,
  // defaultValue = initialAccess_token,
}: {
  children: React.ReactNode;
  // defaultValue?: any;
}) {
  // const [itemCode, setIiemCode] = useState(defaultValue.item_code);
  // console.log(itemCode)
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {/* <myCreateContext.Provider value={itemCode}> */}
        {children}
      {/* </myCreateContext.Provider> */}
    </ThemeProvider>
  );
}
