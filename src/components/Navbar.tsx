'use client'
import Link from "next/link";
import { Fragment, useState } from "react";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
function MobileNav({ open, setOpen }: any) {
    return (
        <div
            className={`absolute z-10 top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out filter  `}
        >
            <div className="flex items-center justify-center filter  bg-white h-20">
                <Link onClick={() => setOpen(!open)} href="/">
                    <h3>gitsearch</h3>
                </Link>
            </div>
            <div className=" text-center flex flex-col ml-4 pt-5 gap-8">

                <Link
                    onClick={() => setOpen(!open)}
                    className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
                    href="/howitworks"
                >
                    How it works!
                </Link>
                <Link
                    onClick={() => setOpen(!open)}
                    className="font-Inter text-primary-black  hover:text-primary-orange text-xl "
                    href="/repositories"
                >
                    Repositories
                </Link>

            </div>
        </div>
    );
}
function Navbar() {
    const [open, setOpen] = useState(false);

    return (

        <nav className="flex font-Inter shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] bg-white px-4 lg:px-10 py-4 h-20 md:h-full   items-center justify-between lg:justify-center pcontainer">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-full  md:w-1/5 lg:ml-20   flex items-center">
                <Link href="/">
                    <h3 className="transition-all duration-200 hover:text-primary" >gitsearch</h3>
                </Link>
            </div>
            <div
                className="z-50 flex relative w-6 h-5 flex-col justify-between items-center md:hidden"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {/* hamburger button */}
                <span
                    className={`h-0.5 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""
                        }`}
                />
                <span
                    className={`h-0.5 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0 hidden" : "w-full"
                        }`}
                />
                <span
                    className={`h-0.5 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""
                        }`}
                />
            </div>

            <div className="hidden md:flex justify-center bg-white w-full ">
                <header className="bg-white w-full  hidden md:block ">
                    <nav className="flex  w-full  items-center self-center">
                        <div className="nav-links  bg-white justify-end lg:mr-20 md:mr-0  w-full flex items-center ">
                            <ul className="flex md:flex-row flex-col justify-end md:items-center lg:gap-[4vw] md:gap-[2vw] gap-4 ">

                                <li>
                                    <Link
                                        className="font-Inter transition-all duration-200 hover:text-primary text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                                        href="/repositories"
                                    >
                                        repositories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-Inter transition-all duration-200 hover:text-primary flex text-primary-black  hover:text-primary-orange text-md lg:text-xl  "
                                        href="/howItWorks"
                                    >
                                        how it works
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>

                </header>
            </div>
        </nav>
    );
}

export default Navbar;
