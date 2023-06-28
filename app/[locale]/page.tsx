import AboutSectionOne from "../[locale]/components/About/AboutSectionOne";

import AboutSectionOneRTL from "../[locale]/components/About/AboutSectionOneRTL";
import Products from "../[locale]/components/Products";
import Blog from "../[locale]/components/Blog";
import Brands from "../[locale]/components/Brands";
import ScrollUp from "../[locale]/components/Common/ScrollUp";
import Contact from "../[locale]/components/Contact";
import LocationSystem from "../[locale]/components/LocationSystem";
import Features from "../[locale]/components/Features";
import Hero from "../[locale]/components/Hero";
import Pricing from "../[locale]/components/Pricing";
import Testimonials from "../[locale]/components/Testimonials";
import Video from "../[locale]/components/Video";
import { Montserrat } from "@next/font/google";
import {  ResolvingMetadata  ,type Metadata} from 'next';
import Logo3i from'../../public/images/logo/logo.png';


type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const fontBase = Montserrat({ subsets: ["latin"] });

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: [Logo3i.src, ...previousImages],
    },
  }
}

export default function Home() {



  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionOneRTL />
      {/* <AboutSectionTwo /> */}
      <Products />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <LocationSystem />
      {/* <Contact /> */}
    </>
  );
}
