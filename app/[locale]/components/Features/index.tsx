"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import {useQuery} from'@tanstack/react-query';
import {GetMenuData} from'../../apis/GetDataHome';

import Dv1 from'../../../../public/images/services/dv1.svg';

import Dv2 from'../../../../public/images/services/dv2.svg';
import Dv3 from'../../../../public/images/services/dv3.svg';
import Dv4 from'../../../../public/images/services/dv4.svg';
import Dv5 from'../../../../public/images/services/dv5.svg';
import Dv6 from'../../../../public/images/services/dv6.svg';
import Dv7 from'../../../../public/images/services/app-development_638cc82b.svg';
import Dv8 from'../../../../public/images/services/dv8.svg'

const  Features = () => {
  const data={
    title:'Dịch vụ',
    to:'services',
    children:[
        {
         img:Dv1,
         id:`2712`,
         title:`Phát triển phần mềm quốc tế`,
         intro:'Với các dịch vụ phát triển ứng dụng máy tính để bàn của chúng tôi, hệ thống được phát triển đặc biệt để đáp ứng yêu cầu kinh doanh của bạn.'   
        },
        {
         img:Dv2,
         id:`2714`,
         title:`Phát triển phần mềm tùy biến`   ,
         intro:'Giải pháp phần mềm tùy biến là phản ứng tốt nhất cho cả khách hàng và doanh nghiệp để thích ứng với điều kiện công nghệ mới. '   

        },
        {
         img:Dv3,
         id:`2715`,
         title:`Dịch vụ phần mềm Outsource`   ,
         intro:'Công ty 3i  cung cấp dịch vụ gia công phần mềm chất lượng cao cho khách hàng trên toàn thế giới, chúng tôi có trụ sở tại Thành phố Hồ Chí Minh và Hà Nội của Việt Nam.'   

        },
        {
         img:Dv4,
         id:`2716`,
         title:`Phát triển sản phẩm phần mềm`   ,
         intro:'Công nghệ 3I chắc chắn là “trợ thủ đắc lực” của bạn, với đội ngũ Lập trình viên chuyên nghiệp, quy trình hoạt động chuẩn, chất lượng đảm bảo về sự hài lòng: từ khâu nghiên cứu ý tưởng sản phẩm, phát triển - ra mắt và bảo trì sản phẩm'
        },{
         img:Dv5,
         id:`2717`,
         title:`Phát triển ứng dụng Web`   ,
         intro:'Như bạn có thể thấy, công nghệ liên tục được gia hạn với những đột phá mới được thêm vào mỗi ngày. Vì vậy, nếu bạn không nhận được sáng kiến từ hôm nay, doanh nghiệp của bạn sẽ bị đau khổ nhiều hơn các đơn vị khác.'   

        },
        {
         img:Dv6,
         id:`2718`,
         title:`Dịch vụ di chuyển CSDL`  ,
         intro:'Như bạn có thể thấy, công nghệ liên tục được gia hạn với những đột phá mới được thêm vào mỗi ngày. Vì vậy, nếu bạn không nhận được sáng kiến từ hôm nay, doanh nghiệp của bạn sẽ bị đau khổ nhiều hơn các đơn vị khác.'   
 
        },
        {
         img:Dv7,
         id:`2719`,
         title:`Phát triển ứng dụng di động` ,
         intro:'IPhone hiện đã trở thành một trong những thiết bị được người tiêu dùng trên toàn thế giới giới thiệu nhiều nhất. Do đó, việc sử dụng các ứng dụng iPhone cũng tăng lên. Các công ty muốn kết nối với người tiêu dùng của họ cần phải có các ứng dụng cho phép họ giao tiếp liền mạch với người dùng iPhone.'   

        },
        {
         img:Dv8,
         id:`2720`,
         title:`Kiểm thử phần mềm quốc tế`   ,
         intro:'Bên cạnh việc phát triển sản phẩm theo chu kỳ đầy đủ, chúng tôi cũng cung cấp một loạt các dịch vụ Đảm bảo chất lượng và Phát triển phần mềm.'   

        }
     ]
}
  return (
    <>
      <section
        id="features"
        className="bg-[green]/[.03] py-16"
      >
        
        <div className="container">
          <SectionTitle
            title={ data.title}
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {data.children.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
