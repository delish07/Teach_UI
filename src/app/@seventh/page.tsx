import Image from "next/image";

export default function page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 my-10 overflow-hidden">
      {/* left grid*/}
      <div className="flex py-10">
        <div className="flex flex-col justify-center gap-8 mx-10">
          <p className="text-2xl md:text-4xl font-bold">
            All the cool{" "}
            <span className="inline-block relative">
              features{" "}
              <Image
                className="absolute w-full bottom-[-0.1rem] md:bottom-[-0.3rem] z-[-1]"
                src="lines/text-stroke.svg"
                width={20}
                height={20}
                alt="text-stroke"
              ></Image>
            </span>
          </p>
          <p>
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </p>
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
      {/* right grid*/}
      <div className="relative">
        <Image
          className="absolute z-[-1]"
          src="/blobs/4-blog.svg"
          width={350}
          height={200}
          alt="blog"
        ></Image>
        {/* container */}
        <div>
          {/* up */}
          <div className="flex">
            {/* card */}
            <div
              className="flex flex-col gap-1 w-32  min-w-40 p-2 bg-white shadow-2xl  rounded-lg ml-4"
              style={{
                boxShadow:
                  "0 7px 10px -1px rgba(0, 0, 0, 0.19), 0 2px 10px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <p className="text-xs text-purple-600 bg-purple-100 font-semibold size-fit py-1 px-2 rounded-lg">
                Featured
              </p>
              <p className="font-bold ">The map of mathematics</p>
              <p className="text-xs">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <button className="border-2 rounded-lg text-sm font-semibold py-1 mt-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white">
                Take Lesson
              </button>
            </div>
            <div className="w-full h-[180px] relative">
              <Image
                className="absolute bottom-[-1.8rem]"
                src="/pics/seventh-page/pic-1.svg"
                width={140}
                height={120}
                alt="pic-1"
              ></Image>
              <Image
                className="absolute left-24 bottom-0"
                src="/pics/seventh-page/pic-2.svg"
                width={60}
                height={80}
                alt="pic-2"
              ></Image>
            </div>
          </div>
          {/* down */}
          <div className="flex overflow-hidden">
            <Image
              src="/pics/seventh-page/pic-3.svg"
              width={230}
              height={179}
              alt="pic-3"
            ></Image>
            <Image
              src="/pics/seventh-page/pic-4.svg"
              width={180}
              height={179}
              alt="pic-4"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
