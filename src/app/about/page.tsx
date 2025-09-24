"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div
      className="relative p-10 flex flex-col min-h-screen gap-10 bg-fixed backdrop-blur-md bg-white/30 bg-[url(/2025/About_bg.png)] md:visible invisible bg-cover text-white"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />


      {/* Page Heading */}
      <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">
        ABOUT DPS-DQ MUN
      </h1>

      {/* Content Sections */}
      <div className="flex flex-col max-w-4xl mx-auto gap-10">
        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            DPS-DQ Model United Nations (MUN) is a premier, student-led simulation of the
            United Nations. It brings together curious, ambitious, and globally minded
            students to engage in diplomacy, dialogue, and decision-making. Founded with
            the vision of nurturing leadership and awareness, DPS-DQ MUN has quickly
            grown into one of the most awaited intellectual and cultural highlights of
            our campus.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We are committed to shaping the leaders of tomorrow—confident, empathetic,
            and articulate global citizens. Through structured debate, collaborative
            problem-solving, and creative policy-making, we inspire students to think
            beyond borders and contribute to a more inclusive and sustainable world.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">What Makes Us Unique</h2>
          <p className="text-lg leading-relaxed">
            At DPS-DQ MUN, we don&apos;t just simulate the UN—we redefine the MUN experience:
            Innovative committees with relevant and thought-provoking agendas,
            student-driven leadership that ensures authenticity, a focus on inclusivity
            and diplomacy, and a growth-oriented environment welcoming both new and
            experienced delegates.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">Our Journey So Far</h2>
          <p className="text-lg leading-relaxed">
            Since our inception in <span className="italic">2019</span>, DPS-DQ MUN
            has expanded in scale, impact, and ambition. What began as a small gathering
            of passionate voices has grown into a professional, multi-committee
            conference that sparks change, drives conversation, and leaves lasting
            inspiration for all participants.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">What We Offer Delegates</h2>
          <p className="text-lg leading-relaxed">
            A realistic UN-style committee experience, exposure to global issues and
            policymaking, opportunities to sharpen skills in public speaking, negotiation,
            and critical thinking, networking with like-minded peers, and recognition
            through awards and leadership roles.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">The Team Behind DPS-DQ MUN</h2>
          <p className="text-lg leading-relaxed">
            Every successful conference rests on the shoulders of a dedicated team. Our
            student-led secretariat manages everything—from operations and logistics to
            academic content and crisis simulations—bringing both professionalism and
            passion to the event.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-3">Why MUN Matters</h2>
          <p className="text-lg leading-relaxed">
            In a world defined by complex challenges, MUN equips young people with the
            tools to understand, debate, and reshape the future. At DPS-DQ MUN, we
            believe in the power of youth-driven dialogue over division—because the
            leaders of tomorrow are sitting in our committees today.
          </p>
        </section>
      </div>
    </div>
  );
}
