import Introduction from "@/components/Common/Introduction";
import { GetItemServices } from "@/app/apis/GetDataHome";
import { ResolvingMetadata, type Metadata } from "next";
import {GetAbout} from'../../apis/GetDataHome';
import {getImg} from'../../utils/util';

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
      />

      <section id={`service-${params.id}`}>
        <div className="container"><div dangerouslySetInnerHTML={{ __html: serviceItem?.data?.content }} /></div>
      </section>
    </>
  );
};

export default ServiceItemPage;
