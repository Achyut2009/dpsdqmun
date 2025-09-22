import TextScramble from "@/components/text-scramble";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import Image from "next/image";

export default function Home(){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image 
          src="/favicon.ico"
          alt="DPSDQMUN Logo"
          width={300}
          height={300}
          className="mb-8"
        />
        <h1 className="text-6xl font-bold">
          <TextScramble text="Welcome to DPSDQMUN" className="text-6xl text-red-500 font-bold"/>
        </h1>
        <p className="mt-3 text-2xl text-gray-400">
          Your diplomacy journey starts here.
        </p>
      </main>
    </div>
  );
}