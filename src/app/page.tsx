import TextScramble from "@/components/text-scramble";
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <Image
          src="/favicon.ico"
          alt="DPSDQMUN Logo"
          width={300}
          height={300}
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          className="mb-8"
        />
        <h1 className="text-6xl font-bold">
          <TextScramble text="Welcome to DPS-DQ MUN" className="textscramble1" /> <br />
          <TextScramble text="DPS-DQ MUN" className="md:hidden text-6xl text-red-500" />
        </h1>
        <p className="mt-3 text-2xl text-gray-400 max-w-3xl">
          An inter-school Model United Nations Conference hosted by the students and teachers of DPS-Modern Indian School for all high school students in Qatar.
        </p>
      </main>
    </div>
  );
}