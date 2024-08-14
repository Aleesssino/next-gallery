"use client";

import Image from "next/image";
import Picture1 from "../../../public/images/1.jpg";
import Picture2 from "../../../public/images/2.jpg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../../public/images/5.jpg";
import Picture6 from "../../../public/images/6.jpg";
import Picture7 from "../../../public/images/7.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallaxGallery() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 z-10 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index: number) => (
          <motion.div
            style={{ scale }}
            key={index}
            className={`absolute w-full h-full flex justify-center items-center`}
          >
            <div
              className={`relative ${getImageSizeClasses(index)} overflow-hidden ${getPositionClasses(
                index,
              )} will-change-transform`}
            >
              <Image
                src={src}
                alt={`image-${index}`}
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getPositionClasses(index: number): string {
  switch (index) {
    case 0:
      return "translate-x-0 translate-y-0";
    case 1:
      return "translate-x-[0vw] translate-y-[-30vh]";
    case 2:
      return "translate-x-[-25vw] translate-y-[-10vh]";
    case 3:
      return "translate-x-[29vw] translate-y-[-10vh]";
    case 4:
      return "translate-x-[5vw] translate-y-[35vh]";
    case 5:
      return "translate-x-[-22.5vw] translate-y-[27.5vh]";
    case 6:
      return "translate-x-[25vw] translate-y-[30vh]";
    default:
      return "";
  }
}

function getImageSizeClasses(index: number): string {
  switch (index) {
    case 0:
      return "w-[28vw] h-[25vh]";
    case 1:
      return "w-[25vw] h-[30vh]";
    case 2:
      return "w-[20vw] h-[45vh]";
    case 3:
      return "w-[25vw] h-[40vh]";
    case 4:
      return "w-[20vw] h-[35vh]";
    case 5:
      return "w-[30vw] h-[25vh]";
    case 6:
      return "w-[15vw] h-[35vh]";
    default:
      return "w-[25vw] h-[25vh]";
  }
}
