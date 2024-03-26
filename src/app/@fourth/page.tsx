import Image from "next/image";

export default function fourth() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8 mx-5">
      {/* left */}
      <div className="flex items-center justify-center order-2 md:order-1">
        <div className="flex ">
          {/* column-1 */}
          <div className="flex flex-col gap-1 justify-center">
            <Image
              className="md:w-20 w-16 ml-auto"
              src="/pics/fourth-page/one.svg"
              width={172}
              height={192}
              alt="one"
            ></Image>
            <Image
              className="w-28"
              src="/pics/fourth-page/two.svg"
              width={172}
              height={258}
              alt="two"
            ></Image>
          </div>
          {/* column-2 */}
          <div className="flex flex-col gap-1 justify-center">
            <Image
              className="w-20"
              src="/pics/fourth-page/three.svg"
              width={128}
              height={192}
              alt="thre"
            ></Image>
            <Image
              className="w-20"
              src="/pics/fourth-page/four.svg"
              width={128}
              height={192}
              alt="four"
            ></Image>
            <Image
              className="w-20"
              src="/pics/fourth-page/five.svg"
              width={128}
              height={192}
              alt="five"
            ></Image>
          </div>
          {/* column-3 */}
          <div className="flex flex-col gap-1 justify-center items-center">
            <Image
              className="w-20"
              src="/pics/fourth-page/six.svg"
              width={128}
              height={192}
              alt="six"
            ></Image>
            <Image
              className="w-20"
              src="/pics/fourth-page/seven.svg"
              width={128}
              height={192}
              alt="seven"
            ></Image>
            <Image
              className="w-20"
              src="/pics/fourth-page/eight.svg"
              width={128}
              height={192}
              alt="eight"
            ></Image>
          </div>
          {/* column-4 */}
          <div className="flex flex-col gap-1 justify-center">
            <Image
              className="w-28"
              src="/pics/fourth-page/nine.svg"
              width={128}
              height={192}
              alt="nine"
            ></Image>
            <Image
              className="md:w-20 w-16"
              src="/pics/fourth-page/ten.svg"
              width={128}
              height={192}
              alt="ten"
            ></Image>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-center order-1 md:order-2">
        <div className="flex flex-col gap-8">
          <p className="text-xl md:text-4xl font-bold">
            Meet internatio
            <span className="relative inline-block">
              <Image
                className="absolute md:bottom-6 bottom-4"
                src="/icons/orange-plane.svg"
                width={40}
                height={32}
                alt="orange-plane"
              ></Image>
              na
            </span>
            l students & teachers
          </p>
          <p>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <p className="text-blue-500 flex items-center gap-2 font-semibold hover:cursor-pointer hover:underline">
            Explore teachers and students
            <Image
              className="pt-1"
              src="icons/right-blue-arrow.svg"
              height={24}
              width={24}
              alt="right arrow"
            ></Image>
          </p>
        </div>
      </div>
    </section>
  );
}
