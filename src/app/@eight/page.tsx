import Image from "next/image";

export default function eight() {
  return (
    <section className="bg-yellow-400 h-screen flex items-center justify-center relative">
      {/* left */}
      <Image
        className="absolute left-0 md:block hidden z-10"
        src="/pics/eight-page/pic-1.svg"
        width={300}
        height={123}
        alt="pic-1"
      ></Image>
      <Image
        className="absolute top-0  md:hidden z-10"
        src="/pics/eight-page/mobile-pic-1.svg"
        width={290}
        height={123}
        alt="pic-1"
      ></Image>
      {/* middle */}
      <div className="flex flex-col gap-5 items-center justify-center z-20">
        <p className="text-xl md:text-3xl text-center font-bold">
          Join a world of learning
        </p>

        <button className="bg-orange-600 rounded text-white px-8 py-2 font-bold hover:bg-orange-700">
          Sign Up Now
        </button>
      </div>
      {/* right */}
      <Image
        className="absolute right-0 md:block hidden z-10"
        src="/pics/eight-page/pic-2.svg"
        width={300}
        height={123}
        alt="pic-2"
      ></Image>
      <Image
        className="absolute bottom-0 md:hidden z-10"
        src="/pics/eight-page/mobile-pic-2.svg"
        width={290}
        height={123}
        alt="pic-1"
      ></Image>
    </section>
  );
}
