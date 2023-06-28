import Head from "next/head";
import React from "react";
import { ResolvingMetadata, type Metadata } from "next";
import { Merriweather, Noto_Serif, Inter } from "next/font/google";

import { GetAbout } from "../../apis/GetDataHome";
import AboutSectionOne from "../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../components/About/AboutSectionTwo";
import Introduction from "../../components/Common/Introduction";
import {getImg} from '../../utils/util'
import Contact from "../../components/Contact";

const blogFont = Merriweather({
  subsets: ["vietnamese"],
  weight: "400"
});

const blogTitleFont = Noto_Serif({
  subsets: ["vietnamese"],
  weight: "400"
})

const blogDescriptionFont = Inter({
  subsets: ["vietnamese"]
})

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

export default async function page({ params, searchParams }: Props) {
  const data = await GetAbout(Number(params.id));
  const languageChoose = searchParams.keyword;

  let dataContent = data?.data?.content;
  let titleContent = data?.data?.title;
  let descriptionContent = data?.data?.short_content;

  if (languageChoose !== 'CMS_LANGUAGE20211027001'){
    const multiLanguage = JSON.parse(data?.data?.multiple_language);
    multiLanguage.map((item) => {
      if (item.lgn === languageChoose){
        dataContent = item.content;
        titleContent = item.title;
        descriptionContent = item.short_content
        return [dataContent, titleContent, descriptionContent];
      }
    });
  }

  return (
    <>
      <Head>
        <title>okkk</title>
        <meta>item okk</meta>
      </Head>
      <Introduction
        pageName={titleContent}
        description={descriptionContent}
        metaImage={getImg(data.data.gallery)}
        fontFamily={blogFont.className}
        fontTitle={blogTitleFont.className}
        fontDescription={blogDescriptionFont.className}
      />
      <section className={`${blogFont.className} overflow-hidden section-blog-detail`}>
        <div className="container mt-20" dangerouslySetInnerHTML={{ __html: dataContent }}></div>
      </section>
      <Contact />
    </>
  );
}
