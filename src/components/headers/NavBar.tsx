"use client";
import Image from "next/image";
import styles from "./NavBar.module.css";
import { useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import "@radix-ui/themes/props";

const NavBar: React.FC = () => {
  const [click, setClick] = useState(false);
  function handleNav() {
    setClick(!click);
  }
  return (
    <header>
      {/* main */}
      <div className="flex gap-2 px-10 py-2 md:py-4 md:justify-center md:items-center ">
        {/* left */}
        <div className="flex gap-1 md:mt-0 mt-1">
          <Image
            src="/icons/uteach.svg"
            height={21}
            width={22}
            alt="uteach"
          ></Image>
          <p className="font-bold text-2xl hover:cursor-pointer">teach</p>
        </div>
        {/* middle */}
        <div
          className={` ${click ? "" : "hidden"} z-30
         absolute md:relative bg-gray-200 left-10 pt-5 md:pt-0 md:bg-white w-10/12 md:w-0 px-5 md:px-0 rounded-t-lg top-16 md:top-0 md:flex gap-10 items-center`}
        >
          <p className="font-semibold hover:cursor-pointer hover:underline underline-offset-8">
            Products
          </p>
          <p className="font-semibold hover:cursor-pointer hover:underline underline-offset-8">
            Solutions
          </p>
          <p className="font-semibold hover:cursor-pointer hover:underline underline-offset-8">
            Pricing
          </p>
          <div className="flex gap-2 items-center">
            <p className="font-semibold hover:cursor-pointer hover:underline underline-offset-8">
              Resources
            </p>
            <div className="z-30 relative flex items-center ">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <ChevronDownIcon />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  className="min-w-[100px] hover:cursor-pointer  bg-white rounded-md p-[10px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="hover:bg-gray-700 pl-1 hover:text-white rounded">
                    Edit
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="hover:bg-gray-700 pl-1 hover:text-white rounded">
                    Duplicate
                  </DropdownMenu.Item>
                  <Separator.Root
                    className={`${styles.SeparatorRoot}`}
                    style={{ margin: "2px 0" }}
                  />
                  <DropdownMenu.Item className="hover:bg-gray-700 pl-1 hover:text-white rounded">
                    Archive
                  </DropdownMenu.Item>

                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger className="flex pl-1 items-center hover:cursor-pointer hover:bg-gray-700 hover:text-white rounded">
                      More
                      <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                        <ChevronRightIcon />
                      </div>
                    </DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent
                      className="min-w-[100px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item className="hover:cursor-pointer pl-1 hover:bg-gray-700 hover:text-white rounded">
                        Move to project…
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="hover:cursor-pointer pl-1 hover:bg-gray-700 hover:text-white rounded">
                        Move to folder…
                      </DropdownMenu.Item>

                      <Separator.Root
                        className={`${styles.SeparatorRoot}`}
                        style={{ margin: "2px 0" }}
                      />
                      <DropdownMenu.Item className="hover:cursor-pointer pl-1 hover:bg-gray-700 hover:text-white rounded">
                        Advanced options…
                      </DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>

                  <Separator.Root
                    className={`${styles.SeparatorRoot}`}
                    style={{ margin: "2px 0" }}
                  />
                  <DropdownMenu.Item className="hover:cursor-pointer pl-1 hover:bg-gray-700 hover:text-white rounded">
                    Share
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="hover:cursor-pointer pl-1 hover:bg-gray-700 hover:text-white rounded">
                    Add to favorites
                  </DropdownMenu.Item>
                  <Separator.Root
                    className={`${styles.SeparatorRoot}`}
                    style={{ margin: "2px 0" }}
                  />
                  <DropdownMenu.Item className="text-red-500 hover:bg-red-500 rounded pl-1 hover:text-white hover:cursor-pointer">
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>
        {/* right */}
        <div
          id="meh"
          className={` ${click ? "" : "hidden"} z-20
          absolute md:relative top-44 pb-5 md:pb-0 md:justify-center md:items-center bg-gray-200 rounded-b-lg left-10 px-5 md:bg-white md:w-max w-10/12 md:top-0 md:flex ml-auto gap-2 `}
        >
          <Separator.Root
            className={`${styles.SeparatorRoot} ${
              click ? "" : "hidden"
            } md:hidden`}
            style={{ margin: "10px 0" }}
          />
          <p className="hover:cursor-pointer hover:underline underline-offset-8">
            Log In
          </p>
          <button className="border-2 font-semibold border-black rounded-lg px-4 py-2 text-xs md:mt-0  mt-1 hover:text-white hover:bg-black">
            Sign Up Now
          </button>
        </div>
        {/* nav icon */}
        <button
          className="ml-auto md:ml-0 md:hidden flex items-center px-3 py-2 rounded text-gray-500 hover:text-black relative mt-2"
          onClick={handleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            viewBox="0 0 50 50"
            className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 transform ${
              click ? "rotate-180" : ""
            } ${click ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
            />
          </svg>
          <svg
            className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 transform ${
              click ? "" : "rotate-180"
            } ${click ? "opacity-100 scale-100" : "opacity-0 scale-0"} `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
