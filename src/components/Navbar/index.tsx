"use client";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdOutlineFileUpload } from "react-icons/md";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaUserGraduate } from "react-icons/fa6";
import { useUser } from "../../context/testContext";
import SearchDialog from "../SearchDiaolog";
import Link from "next/link";
import Image from "next/image";
import NUM_logo from "@/assets/logo/muis-logo.png";
import { useRouter, usePathname } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const { logout, user } = useUser();

  const [navigation, setNavigation] = useState([
    {
      name: "Нүүр хуудас",
      href: "/",
      current: true,
      icons: false,
    },
    {
      name: "Бичиг баримт",
      href: "/document",
      current: false,
      icons: false,
    },

    {
      name: "Удирдагч багш",
      href: "/teachers",
      current: false,
      icons: false,
    },
  ]);

  const handleItemClick = (name: string) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === name,
    }));
    setNavigation(updatedNavigation);
  };
  const pathName = usePathname();

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.href === pathName,
    }));

    if (user?.token) {
      updatedNavigation.push({
        name: "Бүтээл үүсгэх",
        href: "/upload",
        icons: true,
        current: false,
      });
    }

    setNavigation(updatedNavigation);
  }, [pathName, user?.token]);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div
                  className="flex flex-shrink-0 items-center"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <Image
                    className="md:h-12 w-auto cursor-pointer h-10"
                    src={NUM_logo}
                    alt="NUM logo"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 items-center ">
                  {navigation.map((item, index) => (
                    <Link href={item.href} key={item.name}>
                      <div
                        onClick={() => {
                          handleItemClick(item.name);
                        }}
                        className={classNames(
                          item.current
                            ? "border-indigo-600"
                            : "border-transparent",
                          "border-b-2 px-1 pt-1 text-[0.9rem] font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        )}
                      >
                        <div className="flex gap-2 items-center">
                          {item.icons === true && (
                            <div>
                              <MdOutlineFileUpload
                                style={{ fontSize: "24px" }}
                              />
                            </div>
                          )}
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <SearchDialog />
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {user === null ? (
                <div className="md:ml-16 ml-6">
                  <Link href="/login">
                    <button className="mt-3 border-2 border-white/20 text-white bg-[#3364C3] font-semibold  w-fit   flex flex-row items-center gap-2 cursor-pointer rounded-xl  md:py-[0.6rem] md:px-[1rem] md:text-[1rem] py-[0.5rem] px-[0.5rem] text-[0.5rem] hover:bg-opacity-90">
                      <p className="text-white font-bold md:text-[1rem] text-[0.8rem]">
                        Нэвтрэх
                      </p>
                      <div className="text-2xl"></div>
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-1">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <div className="text-2xl text-[#4b43b8]">
                          <FaUserGraduate />
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/upload"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Миний профайл
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => {
                                logout();
                              }}
                            >
                              Гарах
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Нүүр хуудас
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/document"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Бичиг баримт
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="teacher"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Удирдагч багш
              </Disclosure.Button>
              {user?.token && (
                <Disclosure.Button
                  as="a"
                  href="upload"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Upload
                </Disclosure.Button>
              )}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/upload"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Миний профайл
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  onClick={() => {
                    logout();
                  }}
                >
                  Гарах
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
