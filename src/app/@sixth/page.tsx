"use client";

import Image from "next/image";
import React, { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

export default function sixth() {
  const swiperRef = useRef<any>();

  const goToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <section className="flex flex-col gap-10 pt-10 pb-5 pl-10">
      {/* top */}
      <div className="flex items-center pr-10">
        <div className="text-2xl md:text-3xl font-bold">What everyone says</div>
        <div className="ml-auto md:flex gap-3 items-center justify-center hidden">
          <Image
            onClick={goToPrev}
            className="hover:cursor-pointer"
            src="icons/orange-left-arrow.svg"
            height={35}
            width={35}
            alt="left arrow"
          ></Image>
          <Image
            onClick={goToNext}
            className="hover:cursor-pointer"
            src="icons/orange-right-arrow.svg"
            height={35}
            width={35}
            alt="right arrow"
          ></Image>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1.3}
          ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="py-5 px-1">
            <div
              className="flex flex-col gap-4 shadow-2xl rounded-lg p-5"
              style={{
                boxShadow:
                  "0 2px 10px 2px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="text-xs">
                Lacus vestibulum ultricies mi risus, duis non, volutpat nullam
                non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
                Vitae quis cras vitae praesent morbi adipiscing purus
                consectetur mi.
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src="pics/sixth-page/pic-1.svg"
                  height={45}
                  width={45}
                  alt="pic1"
                ></Image>
                <div>
                  <p className="text-sm">Hellen Jummy</p>
                  <p className="text-xs">Financial Counselor</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5 px-1">
            <div
              className="flex flex-col gap-4 shadow-2xl rounded-lg p-5"
              style={{
                boxShadow:
                  "0 2px 10px 2px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="text-xs">
                Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque
                ut id. In tortor turpis viverra sagittis ultrices nisi, nec
                tortor. Vestibulum, ultrices ultricies neque, hac ultricies
                dolor.
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src="pics/sixth-page/pic-2.svg"
                  height={45}
                  width={45}
                  alt="pic1"
                ></Image>
                <div>
                  <p className="text-sm">Ralph Edwards</p>
                  <p className="text-xs">Math Teacher</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5 px-2">
            <div
              className="flex flex-col gap-4 shadow-2xl rounded-lg p-5"
              style={{
                boxShadow:
                  "0 2px 10px 2px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="text-xs">
                Sagittis nunc egestas leo et malesuada urna risus. Morbi proin
                et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi
                volutpat tellus, congue malesuada sit nisl donec a.
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src="pics/sixth-page/pic-3.svg"
                  height={45}
                  width={45}
                  alt="pic1"
                ></Image>
                <div>
                  <p className="text-sm">Hellena John</p>
                  <p className="text-xs">Psychology Student</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5 px-1">
            <div
              className="flex flex-col gap-4 shadow-2xl rounded-lg p-5"
              style={{
                boxShadow:
                  "0 2px 10px 2px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="text-xs">
                Sapien, sollicitudin et vitae id et laoreet sapien consectetur.
                Felis egestas egestas amet aliquam sit euismod. Pellentesque
                neque, sed ut volutpat. Ullamcorper in at nulla dignissim.
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src="pics/sixth-page/pic-4.svg"
                  height={45}
                  width={45}
                  alt="pic1"
                ></Image>
                <div>
                  <p className="text-sm">David Oshodi</p>
                  <p className="text-xs">Manager</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
