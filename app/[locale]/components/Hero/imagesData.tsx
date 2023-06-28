import Image from "next/image";

import { Images } from "@/types/images";
import Image1 from "@/public/images/hero/hero.png";
import Image2 from "@/public/images/hero/hero2.png";
import Image3 from "@/public/images/hero/hero3.png";
import Image4 from "@/public/images/hero/hero4.png";
import Image5 from "@/public/images/hero/hero5.png";
const imageData: Images[] = [
    {
        id: 1,
        image: (
            <Image
                src={Image1}
                alt="Image 1"
                fill
            />
        )
    },
    {
        id: 2,
        image: (
            <Image
                src={Image2}
                alt="Image 2"
                fill
            />
        )
    },
    {
        id: 3,
        image: (
            <Image
                src={Image3}
                alt="Image 3"
                fill
            />
        )
    },
    {
        id: 4,
        image: (
            <Image
                src={Image4}
                alt="Image 4"
                fill
            />
        )
    },
    {
        id: 5,
        image: (
            <Image
                src={Image5}
                alt="Image 5"
                fill
            />
        )
    }
];

export default imageData;
