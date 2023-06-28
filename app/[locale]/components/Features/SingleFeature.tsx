import { Feature } from "@/types/feature";
import { join } from "path";
import { json } from "stream/consumers";
import Image from "next/image";

const SingleFeature = ({ feature }: any) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[100px] w-[100px] items-center justify-center rounded-md bg-[green] bg-opacity-10 text-primary">
          <Image
            alt=""
            src={feature.img}
            className="aspect-square w-48 md:w-72 xl:w-48"
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white">
          {feature.title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed">
          {feature.intro}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
