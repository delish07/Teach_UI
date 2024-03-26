"use client";

import styles from "./footer.module.css";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

export default function footer() {
  return (
    <footer className={`${styles.bg}`}>
      <div className="md:mx-10 md:px-7 px-5 py-5">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-6 py-5 gap-10 md:gap-5">
          {/* column-1 */}
          <div className="flex">
            <Image
              className="mb-auto mt-1"
              src="/icons/uteach-white.svg"
              width={20}
              height={20}
              alt="uteach"
            ></Image>
            <p className="text-white text-xl font-bold mb-auto">teach</p>
          </div>
          {/* column-2 */}
          <div className="text-white flex flex-col gap-4 text-xs">
            <p className="font-semibold">Product</p>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p className="flex gap-1">
              Accessibility
              <button className="text-purple-700 px-1  rounded bg-purple-200">
                BETA
              </button>
            </p>
          </div>
          {/* column-3 */}
          <div className="text-white flex flex-col gap-4 text-xs">
            <p className="font-semibold"> Solutions</p>
            <p>Brainstorming</p>
            <p>Ideation</p>
            <p>Wireframing</p>
            <p>Research</p>
          </div>
          {/* column-4 */}
          <div className="text-white flex flex-col gap-4 text-xs">
            <p className="font-semibold"> Resources</p>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
            <p>FAQs</p>
          </div>
          {/* column-5 */}
          <div className="text-white flex flex-col gap-4 text-xs">
            <p className="font-semibold"> Support</p>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Documentation</p>
            <p>Integrations</p>
          </div>
          {/* column-6 */}
          <div className="text-white flex flex-col gap-4 text-xs">
            <p className="font-semibold">Company</p>
            <p>About</p>
            <p>Press</p>
            <p>Events</p>
            <p className="flex gap-2 items-center">
              Request Demo <ArrowRightIcon className="hover:cursor-pointer" />
            </p>
          </div>
        </div>
        {/* bottom */}
        <div>
          <Separator.Root
            className={`${styles.SeparatorRoot} opacity-10`}
            style={{ margin: "15px 0" }}
          />
          <div className="text-white md:flex">
            <p className="text-xs">uteach @ 2023. All rights reserved.</p>
            <div className="text-xs flex gap-5 md:ml-auto md:mt-0 mt-5">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Contact</p>
              <p className="flex gap-2">
                <Image
                  className="mt-[0.1rem]"
                  src="/icons/globe.svg"
                  height={10}
                  width={13}
                  alt="globe"
                ></Image>
                EN
              </p>
              <p className="flex gap-2">
                <Image
                  src="/icons/euro.svg"
                  height={10}
                  width={15}
                  alt="globe"
                ></Image>
                EUR
              </p>
              <Image
                src="/icons/final.svg"
                width={15}
                height={10}
                alt="final"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
