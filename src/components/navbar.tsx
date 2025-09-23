"use client";
import { useState } from "react";
import { ThemeToggle } from "./toggle-theme";
import Link from "next/link";
import { FaInstagram, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ContactModal from "./contact-modal";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* Navbar with blur */}
            <div className="sticky top-0 left-0 right-0 z-50">
                <div className="backdrop-blur-md">
                    <div className="flex flex-row justify-between items-center p-3 text-md font-bold text-gray-900 dark:text-gray-100 max-w-7xl mx-auto">
                        <Link href="/" className="text-lg text-red-500">DPS-DQ MUN</Link>
                        <div className="hidden md:flex flex-row font-normal text-md" id="navbar">
                            <div className="px-3"><Link href={"/about"}>About</Link></div>
                            <div className="px-3"><Link href={"/org"}>Organising Committee</Link></div>
                            <div className="px-3"><Link href={"/agenda"}>Agenda/Committees</Link></div>
                            <div className="px-3 hover:cursor-pointer"><ContactModal /></div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Link href="https://www.instagram.com/dpsdqmun2025/" target="_blank"><FaInstagram /></Link>
                            <ThemeToggle />
                            <button onClick={() => setSidebarOpen(true)} className="md:hidden text-xl">
                                <FaBars />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar with solid color */}
            <div className={`fixed top-0 right-0 h-full w-64 rounded-l-2xl bg-white dark:bg-neutral-950 shadow-2xl z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setSidebarOpen(false)} className="text-2xl text-gray-700 dark:text-gray-300">
                        <IoMdClose />
                    </button>
                </div>
                <div className="flex flex-col items-start px-6 space-y-4 text-gray-900 dark:text-gray-100 font-medium">
                    <Link href={"/about"} onClick={() => setSidebarOpen(false)}>About</Link>
                    <Link href={"/org"} onClick={() => setSidebarOpen(false)}>Organising Committee</Link>
                    <Link href={"/agenda"} onClick={() => setSidebarOpen(false)}>Agenda/Committees</Link>
                    <div onClick={() => setSidebarOpen(false)}><ContactModal /></div>
                </div>
            </div>
        </>
    );
}
