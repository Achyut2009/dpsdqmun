"use client"

import Image from "next/image";
import { teachers_a, teachers_b, Sg, Operations, Deputy_Operations, Admin, Press, IT, directors_a, directors_b, general_assembly } from "../data";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2" id="about">
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                )}
            />

            <div className="flex flex-col p-10 gap-10">
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">Teachers</h1>
                <div className="flex flex-col gap-x-10 justify-center">
                    {teachers_a.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">MUN incharge</p>
                        </div>
                    ))}
                    <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                        {teachers_b.map((person) => (
                            <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                                <Image
                                    alt="Profile Photo"
                                    className="rounded-full"
                                    height="200"
                                    src={person.image}
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="200"
                                />
                                <h2 className="text-2xl font-semibold">{person.name}</h2>
                                <p className="text-md">MUN incharge</p>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">Secretary-General</h1>
                <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                    {Sg.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">General-Assembly</h1>
                <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                    {general_assembly.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">Operations</h1>
                <div className="flex flex-col gap-x-10 justify-center">
                    <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                        {Operations.map((person) => (
                            <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                                <Image
                                    alt="Profile Photo"
                                    className="rounded-full"
                                    height="200"
                                    src={person.image}
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="200"
                                />
                                <h2 className="text-2xl font-semibold">{person.name}</h2>
                                <p className="text-md">{person.post}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                        {Deputy_Operations.map((person) => (
                            <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                                <Image
                                    alt="Profile Photo"
                                    className="rounded-full"
                                    height="200"
                                    src={person.image}
                                    style={{
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }}
                                    width="200"
                                />
                                <h2 className="text-2xl font-semibold">{person.name}</h2>
                                <p className="text-md">{person.post}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">Admins</h1>
                <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                    {Admin.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">Press Team</h1>
                <div className="flex flex-row gap-x-10 justify-center">
                    {Press.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">IT Team</h1>
                <div className="flex flex-row gap-x-10 justify-center flex-wrap">
                    {IT.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">MUN Directors</h1>
                <div className="flex flex-col-2 gap-x-10 justify-center flex-wrap">
                    {directors_a.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col-2 gap-x-10 justify-center flex-wrap">
                    {directors_b.map((person) => (
                        <div key={person.name} className="mb-8 flex flex-col items-center gap-1">
                            <Image
                                alt="Profile Photo"
                                className="rounded-full"
                                height="200"
                                src={person.image}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="200"
                            />
                            <h2 className="text-2xl font-semibold">{person.name}</h2>
                            <p className="text-md">{person.post}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}