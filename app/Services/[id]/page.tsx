import { Merriweather, Noto_Serif, Inter } from "next/font/google";

import Introduction from "@/components/Common/Introduction";
import { GetItemServices } from "@/app/apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import {GetAbout} from'../../apis/GetDataHome';
import {getImg} from'../../utils/util';

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
      images: [getImg(product?.data?.gallery), ...previousImages],
    },
  };
}

const ServiceItemPage = async({ params, searchParams }: Props) => {
  const serviceItem = await GetItemServices(params.id);
  return (
    <>
      <Introduction
        pageName={serviceItem?.data?.title}
        description={serviceItem?.data?.short_content}
        metaImage={getImg(serviceItem?.data?.gallery)}
        showLink={false}
        fontFamily={blogFont.className}
        fontTitle={blogTitleFont.className}
        fontDescription={blogDescriptionFont.className}
      />

      <section id={`service-${params.id}`} className={`${blogFont.className} section-blog-detail`}>
        <div className="container mt-20"><div dangerouslySetInnerHTML={{ __html: serviceItem?.data?.content }} /></div>
      </section>
    </>
  );
};

export default ServiceItemPage;
