import React from 'react'
import Breadcrumb from "../../components/Common/Breadcrumb";
import Contact from "../../components/Contact";



export default function contact() {
  return (
    <div>
      <Breadcrumb classitem={'mt-[20px]'} pageName={'Thông Tin Liên Hệ'} />
         <Contact/>
    </div>
  )
}
