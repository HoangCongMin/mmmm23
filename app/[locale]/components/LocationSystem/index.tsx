import Image from "next/image";

import SectionTitleFull from "../Common/SectionTitleFull";
import LocationMap from '@/public/images/locationsystem/customer.png'

const LocationSystem = () => {
  return (
    <section className="mt-[50px]">
      <div className="container">
        <SectionTitleFull
          title="Khách hàng"
          paragraph="Được thành lâp vào tháng 3 năm 2006 với tiền thân là một đội chuyên gia phần mềm và giải pháp viễn thông có kinh nghiệm từ Hàn Quốc. Chúng tôi đang từng bước đạt được uy tín và niềm tin từ khách hàng trong nước và các đối tác nước ngoài"
          mb="44px"
          center
        />
      </div>
      <Image
        src={LocationMap}
        alt="logo"
        className="w-full dark:hidden"
        width={2000}
        height={1000}
      />
    </section>
  );
};

export default LocationSystem;
