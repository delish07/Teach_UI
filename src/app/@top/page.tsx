import Image from "next/image";

export default function top() {
  return (
    <main className="md:mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {/* left */}
        <div className="flex flex-col items-center px-10 justify-around gap-10">
          {/* top */}
          <div className="flex flex-col">
            <h1 className="mb-0 text-4xl md:text-5xl pb-6 text-left font-bold z-10">
              <span className="relative">
                <Image
                  className="absolute inline-block bottom-[-0.5px] w-full z-[-1]"
                  src="lines/text-stroke.svg"
                  width={130}
                  height={12}
                  alt="stroke"
                ></Image>
                Teach
              </span>{" "}
              students worldwide
            </h1>

            <p>Amet nunc diam orci duis ut sit diam arcu, nec.</p>
            <p>Eleifend proinmassa tincidunt viverra lectus pulvinar.</p>
            <p>Nunc ipsum est pellentesque turpis ultricies.</p>
            <div className="mt-4 flex items-center">
              <button className="bg-orange-600 rounded text-white px-8 py-2 font-bold hover:bg-orange-700">
                Sign Up Now
              </button>
              <div className="flex ml-4 items-center gap-1 justify-center">
                <Image
                  className="hover:cursor-pointer"
                  src="/icons/play.png"
                  height={25}
                  width={25}
                  alt="play"
                ></Image>
                <p className="text-blue-500 text-sm font-semibold hover:cursor-pointer">
                  View Demo
                </p>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="w-full md:flex">
            <div>
              <p className="text-xs font-light md:block inline-block">
                Trusted by <span className="md:block"></span> leading companies
              </p>
            </div>

            <div className="md:ml-14 md:mt-0 mt-3 flex gap-6 ">
              <Image
                src="/icons/top-1.svg"
                height={32}
                width={20}
                alt="one"
              ></Image>
              <Image
                src="/icons/top-2.svg"
                height={32}
                width={20}
                alt="two"
              ></Image>
              <Image
                src="/icons/top-3.svg"
                height={32}
                width={20}
                alt="three"
              ></Image>
              <Image
                src="/icons/top-4.svg"
                height={32}
                width={20}
                alt="four"
              ></Image>
              <Image
                src="/icons/top-5.svg"
                height={32}
                width={20}
                alt="five"
              ></Image>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-center p-2">
          <Image
            src="/pics/top-1.png"
            alt="right"
            width={370}
            height={400}
          ></Image>
        </div>
      </div>
    </main>
  );
}
