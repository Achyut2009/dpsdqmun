"use client";

import { FaBars } from "react-icons/fa";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Organisers",
        url: "/org",
    },
    {
        title: "Editions",
        url: "/editions",
    },
    {
        title: "Contact",
        url: "/contact"
    },
]

export function AppSidebar() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarTrigger className="md:invisible visible"><FaBars /></SidebarTrigger>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>DPSDQMUN</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    )
}