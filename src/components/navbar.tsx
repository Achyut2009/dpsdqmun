"use client";
import { ThemeToggle } from "./toggle-theme";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import ContactModal from "./contact-modal";

export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md">
            <div className="flex flex-row justify-between items-center p-3 text-md font-bold text-gray-900 dark:text-gray-100 max-w-7xl mx-auto">
                <Link href="/" className="text-lg text-red-500">DPSDQMUN</Link>
                <div className="flex flex-row font-normal text-md md:visible invisible">
                    <div className="px-3"><Link href={"/about"}>About</Link></div>
                    <div className="px-3"><Link href={"/org"}>Organising Committee</Link></div>
                    <div className="px-3"><Link href={"/agenda"}>Agenda/Committees</Link></div>
                    <div className="px-3"><Link href={"/editions"}>Editions</Link></div>
                    <div className="px-3 hover:cursor-pointer"><ContactModal/></div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <Link href="https://www.instagram.com/dpsdqmun2025/" target="_blank"><FaInstagram /></Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
