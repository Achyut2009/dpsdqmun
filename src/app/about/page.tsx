"use client"

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2" id="about">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    );
}