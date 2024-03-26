import styles from "./fifth.module.css";
import Image from "next/image";

export default function fifth() {
  return (
    <section className={` ${styles.bg}`}>
      {/* container */}
      <div className="flex md:flex-row flex-col p-10 md:gap-0 gap-11 justify-around">
        {/* left */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/icons/orange-heart.svg"
            height={32}
            width={32}
            alt="orange-heart"
          ></Image>
          <p className="text-yellow-400 text-4xl font-bold">195</p>
          <div className="text-yellow-400 text-sm">user countries</div>
        </div>
        {/* middle */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/icons/orange-diamond.svg"
            height={32}
            width={32}
            alt="orange-heart"
          ></Image>
          <p className="text-yellow-400 text-4xl font-bold">1M</p>
          <div className="text-yellow-400 text-sm">valued teachers</div>
        </div>
        {/* right */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/icons/orange-ghat.svg"
            height={32}
            width={32}
            alt="orange-heart"
          ></Image>
          <p className="text-yellow-400 text-4xl font-bold">17M</p>
          <div className="text-yellow-400 text-sm">happy students</div>
        </div>
      </div>
    </section>
  );
}
