import React from 'react';
import {GetAbout} from'../../apis/GetDataHome';

import Breadcrumb from "../../components/Common/Breadcrumb";

import {getImg} from '../../utils/util';
import { ResolvingMetadata, type Metadata } from "next";





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



export default async function  Careers({params}:any) {

  const data= await GetAbout(params.id)

  return (
    <div>
      <Breadcrumb classitem={'mt-[20px]'} pageName={data.data.title} renderHTML={data.data.content}/>
    </div>
  )
}
