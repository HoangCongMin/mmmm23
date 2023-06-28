import Image from "next/image";

import { Products } from "@/types/products";
import Product1 from "@/public/images/products/vtcetdhdn.jpg";
import Product2 from "@/public/images/products/logoSW.png";
import Product3 from "@/public/images/products/htqlpk.png";
import Product4 from "@/public/images/products/htqt_khohs.png";

const productsData: Products[] = [
  {
    id: 1,
    image: (
      <Image
      src={Product1}
      alt="product1"
      fill
    />
    ),

    title: "Hệ thống quản lý công văn và văn bản EDMS",
  },
  {
    id: 1,
    image: (
      <Image src={Product2} alt="" />
    ),

    title: "Hệ thống quản lý kho, chứng từ và số hóa",
  },
  {
    id: 1,
    image: (
      <Image src={Product3} alt="" />
    ),

    title: "Hệ thống quản lý phòng khám SMART SURGERY",
  },
  {
    id: 1,
    image: (
      <Image src={Product4} alt="" />
    ),

    title: "Hệ thống quản lý kho, chứng từ và số hóa",
  },
];
export default productsData;
