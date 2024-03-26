import Image from "next/image";

export default function second() {
  return (
    <>
      <section className="flex flex-col items-center md:bg-gray-200 gap-5 md:gap-14 p-5 relative">
        {/* top */}
        <div className="mt-5 relative">
          <p className="text-xl md:text-5xl font-bold md:text-center mb-4 relative z-10 ">
            All the tools that you need
          </p>
          {/* line strokes */}
          <Image
            className="absolute left-56 top-10 hidden md:block"
            src="/lines/text-stroke.svg"
            width={105}
            height={12}
            alt="text-stroke"
          />
          <Image
            className="absolute left-16 top-5 md:hidden"
            src="/lines/text-stroke.svg"
            width={55}
            height={30}
            alt="text-stroke"
          />
          <p className="md:text-center text-lg relative z-10">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris.
          </p>
          <div className="md:text-center text-lg relative z-10">
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
          </div>
        </div>
        {/* middle */}
        <div className="flex flex-col w-full items-center justify-around  md:relative">
          {/* blobs */}
          <Image
            className="absolute z-0 left-5 bottom-3 hidden md:block"
            src="/blobs/left-blob.svg"
            height={100}
            width={400}
            alt="blob"
          />
          <Image
            className="absolute z-0 right-0 bottom-3 hidden md:block"
            src="/blobs/right-blob.svg"
            height={100}
            width={250}
            alt="blob"
          />
          <Image
            className="absolute z-0 right-0 top-12 md:hidden"
            src="/blobs/mobile-right-blob.svg"
            height={200}
            width={100}
            alt="blob"
          />
          <Image
            className="absolute z-0 left-0 top-40 md:hidden"
            src="/blobs/mobile-left-blob.svg"
            height={200}
            width={100}
            alt="blob"
          />

          {/* white top */}
          <div className=" bg-white w-11/12 md:w-4/5 h-5 rounded-t-lg flex gap-10 items-center z-10">
            <div className="flex items-center justify-around w-10 ml-3 mr-auto">
              <div className="bg-red-600 h-2 w-2 rounded-lg"></div>
              <div className="bg-yellow-400 h-2 w-2 rounded-lg"></div>
              <div className="bg-green-400 h-2 w-2 rounded-lg"></div>
            </div>
            <div className="bg-gray-100 w-1/2 h-4 rounded-lg flex items-center justify-center">
              <p className="text-xs font-semibold">utech.com</p>
            </div>
            <div className="flex py-1 pr-3 ml-auto">
              <Image
                src="/icons/left.svg"
                alt="right"
                width={10}
                height={10}
              ></Image>
              <Image
                src="/icons/right.svg"
                alt="right"
                width={12}
                height={12}
              ></Image>
            </div>
          </div>
          {/* window */}
          <div className=" w-11/12 md:w-4/5 z-10">
            <Image
              src="/pics/window.png"
              width={0}
              height={0}
              className="object-cover w-full rounded-b-lg"
              alt="window"
            ></Image>
            <Image
              className="absolute  md:left-80 hidden md:block"
              src="/lines/major-line.svg"
              width={300}
              height={78}
              alt="major-line"
            ></Image>
            <Image
              className="absolute  right-40 md:hidden"
              src="/lines/major-line.svg"
              width={130}
              height={58}
              alt="major-line"
            ></Image>
          </div>
        </div>
        {/* bottom */}
        <div className="rounded-lg overflow-hidden mb-2">
          <div className="flex gap-5">
            <Image
              className="hover:cursor-pointer"
              src="/icons/chalk-board.svg"
              width={64}
              height={64}
              alt="chalk-board"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/drive.svg"
              width={64}
              height={64}
              alt="drive"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/google.svg"
              width={64}
              height={64}
              alt="google"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/camera.svg"
              width={64}
              height={64}
              alt="camera"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/infinity.svg"
              width={64}
              height={64}
              alt="infinity"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/calender.svg"
              width={64}
              height={64}
              alt="calender"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/stocks.svg"
              width={64}
              height={64}
              alt="stocks"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/wifi.svg"
              width={64}
              height={64}
              alt="wifi"
            ></Image>
            <Image
              className="hover:cursor-pointer"
              src="/icons/vr.svg"
              width={64}
              height={64}
              alt="vr"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
