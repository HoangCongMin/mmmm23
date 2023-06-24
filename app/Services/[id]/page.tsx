import Breadcrumb from "@/components/Common/Breadcrumb";
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
  console.log("params: ", serviceItem);
  return (
    <>
      <Breadcrumb
        pageName={serviceItem?.data?.title}
        description=""
      />

      <section id={`service-${params.id}`}>
        <div className="container"><div dangerouslySetInnerHTML={{ __html: serviceItem?.data?.content }} /></div>
      </section>
    </>
  );
};

export default ServiceItemPage;
