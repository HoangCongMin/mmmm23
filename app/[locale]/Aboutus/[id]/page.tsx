import React from "react";
import { GetAbout } from "../../apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import Head from "next/head";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {getImg} from'../../utils/util'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const product = await GetAbout(Number(id));

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:product?.data?.title,
    description:product?.data?.short_content,
    openGraph: {
      images: [`${getImg(product?.data?.gallery)}`, ...previousImages],
    },
  };
}

export default async function page({params,searchParams}:Props) {
    const data= await GetAbout( Number( params.id))

    console.log(data)
  return (
    <div>
      <Head>
        <title>okkk</title>
        <meta>item okk</meta>
      </Head>
      <Breadcrumb
        pageName={data.data.title}
        renderHTML={data.data.content}
      />
    </div>
  );
}
