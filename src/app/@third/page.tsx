"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function third() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* left */}
        <div className="flex ">
          <div className="flex flex-col justify-center gap-8 mx-10">
            <p className="text-3xl md:text-5xl font-bold">
              An{" "}
              <span className="relative inline-block">
                <Image
                  src="/lines/text-stroke.svg"
                  className="w-full absolute bottom-[-0.3rem] md:bottom-[-0.8rem] z-[-1]"
                  width={12}
                  height={20}
                  alt="stroke"
                ></Image>
                all-in-one
              </span>{" "}
              app that makes it easier
            </p>
            <p className="md:hidden block">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet, dui sit suspendisse.
            </p>
            <div>
              <div className="flex gap-1">
                <Image
                  src="/icons/tick.svg"
                  height={24}
                  width={24}
                  alt="tick"
                ></Image>
                <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/icons/tick.svg"
                  height={24}
                  width={24}
                  alt="tick"
                ></Image>
                <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/icons/tick.svg"
                  height={24}
                  width={24}
                  alt="tick"
                ></Image>
                <p>Ullamcorper ornare in et egestas dolor orci.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 hover:cursor-pointer">
              <p className="text-blue-500 font-semibold hover:cursor-pointer hover:underline">
                Find more about the app
              </p>
              <Image
                className="pt-1"
                src="icons/right-blue-arrow.svg"
                height={24}
                width={24}
                alt="right arrow"
              ></Image>
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <div className="relative md:mb-14 md:overflow-visible overflow-hidden">
            {/* blob */}
            <Image
              className="absolute z-0 top-10 left-0 md:top-32 md:block hidden"
              src="blobs/third-blog.svg"
              width={200}
              height={400}
              alt="blobs"
            ></Image>
            <Image
              className="absolute z-0 top-10 right-44 md:hidden"
              src="blobs/third-blog.svg"
              width={250}
              height={200}
              alt="blobs"
            ></Image>
            {/* window */}
            <Image
              className="absoulte z-10 relative hidden md:block md:top-20 md:left-10"
              src="pics/third-window.svg"
              height={391}
              width={550}
              alt="window"
            ></Image>
            <Image
              className="absolute z-10 top-5 md:hidden"
              src="pics/third-window.svg"
              height={500}
              width={900}
              alt="window"
            ></Image>

            {/* cards */}
            <div className="flex gap-5 z-20 relative md:my-10 mt-40 mb-10">
              <Swiper
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 1,
                  },
                }}
              >
                <SwiperSlide>
                  {/* one */}
                  <div
                    className="flex flex-col gap-1 w-32 md:min-w-40 mt-auto ml-2 mb-3 min-w-40 p-2 bg-white shadow-2xl  rounded-lg"
                    style={{
                      boxShadow:
                        "0 7px 10px -1px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <p className="text-xs text-purple-600 bg-purple-100 font-semibold size-fit py-1 px-2 rounded-lg">
                      Featured
                    </p>
                    <p className="font-bold text-md">The map of mathematics</p>
                    <p className="text-xs">
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                    <button className="border-2 rounded-lg text-sm font-semibold py-1 mt-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
                      Take Lesson
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* two */}
                  <div
                    className="flex flex-col gap-1 w-32 md:min-w-40  mt-auto min-w-40  p-2 bg-white shadow-2xl  rounded-lg"
                    style={{
                      boxShadow:
                        "0 7px 10px -1px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <p className="text-xs text-blue-600 bg-blue-100 font-semibold size-fit py-1 px-2 rounded-lg">
                      Popular
                    </p>
                    <p className="font-bold text-md">
                      Design for how people think
                    </p>
                    <p className="text-xs">
                      Aliquam ut euismod condimentum elementum ultricies
                      volutpat sit non.
                    </p>
                    <button className="border-2 rounded-lg font-semibold  text-sm py-1 mt-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
                      Take Lesson
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* three */}
                  <div
                    className="flex flex-col gap-1 w-32 min-w-40  mt-auto p-2 bg-white shadow-2xl  rounded-lg"
                    style={{
                      boxShadow:
                        "0 7px 10px -1px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    <p className="text-xs text-green-600 bg-green-100 font-semibold size-fit py-1 px-2 rounded-lg">
                      New
                    </p>
                    <p className="font-bold text-md">
                      International & commercial law
                    </p>
                    <p className="text-xs">
                      Molestie integer eu arcu, mauris bibendum rhoncus
                      imperdiet dui.
                    </p>
                    <button className="border-2 rounded-lg font-semibold  text-sm py-1 mt-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
                      Take Lesson
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* one */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
