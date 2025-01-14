import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBlog,
  FaShoppingCart,
  FaReact,
  FaFileAlt,
  FaMobileAlt
} from "react-icons/fa";
import Image from "next/image";

const serviceLogos = [
  <FaBlog key={0} className="text-white" />,
  <FaShoppingCart key={1} className="text-white" />,
  <FaReact key={2} className="text-white" />,
  <FaFileAlt key={3} className="text-white" />,
  <FaMobileAlt key={4} className="text-white" />,
  <FaMobileAlt key={5} className="text-white" />
];
export default function ServicesTypeSection({ translations }: any) {
  const servicesRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const services = translations.servicesTypeSection.services;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // one slide on < 768 width
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section
      ref={servicesRef}
      id="resumeSection"
      className="flex flex-col p-12 rounded-3xl shadow-2xl gap-12 items-center bg-[#0E0B20] overflow-hidden group max-md:w-full max-md:px-[5vw]"
    >
      <div className="flex flex-col gap-3 text-center md:max-w-[70%]">
        <h2 className="text-[2.625rem] leading-none">
          {translations.servicesTypeSection.title}
        </h2>
        <span className="text-lg text-[#959595]">
          {translations.servicesTypeSection.description}
        </span>
      </div>
      <div
        className="w-full relative max-md:max-w-full max-md:force-max-w-full"
        style={{
          maxWidth: servicesRef.current?.clientWidth
            ? `${servicesRef.current?.clientWidth - 48 * 2}px`
            : `${1170 - 48 * 2}px`
        }}
      >
        <Slider ref={sliderRef} {...settings}>
        {services.map((service:any, index:number) => (
            <div key={index} className="p-6 max-md:p-[5vw]">
              <div className="flex flex-col p-12 gap-4 items-center justify-between rounded-3xl min-h-[330px]"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.6) 0px 0px 20px"
              }}>
                <div className="text-6xl text-white max-h-[60px]">{serviceLogos[index]}</div>
                <p className="text-2xl text-white leading-none text-center">{service.title}</p>
                <p className="text-lg text-center text-[#959595] leading-none">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        {/* Botões de navegação permanecem os mesmos */}
        <div className="absolute top-0 left-0 flex w-fit h-full items-center">
          <div className="w-[24px] h-full bg-gradient-to-r from-[#0E0B20] to-transparent left-0 absolute" />
          <div
            className="p-3 cursor-pointer transition-all duration-300 -translate-x-24 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 max-md:p-[5vw]"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <Image src="/images/assets/left-arrow.svg" alt="left arrow" width={32} height={32} />
          </div>
        </div>
        <div className="absolute top-0 right-0 flex w-fit h-full items-center">
          <div className="w-[24px] h-full bg-gradient-to-l from-[#0E0B20] to-transparent right-0 absolute" />
          <div
            className="p-3 cursor-pointer transition-all duration-300 translate-x-24 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 max-md:p-[5vw]"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <Image src="/images/assets/right-arrow.svg" alt="right arrow" width={32} height={32} />
          </div>
        </div>
      </div>
    </section>
  );
}

