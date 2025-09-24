"use client";

import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

export default function Agenda() {
    return (
        <div
      className="relative p-10 flex flex-col min-h-screen gap-10 bg-fixed bg-center backdrop-blur-xs bg-[url(/2025/Agenda_bg.png)] bg-cover text-gray-800 dark:text-gray-200"
      id="about"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

            <h1 className="text-5xl font-bold mb-5 text-red-500 text-center">COMMITTEE ISSUE</h1>
            <div className="flex flex-col text-center max-w-5xl mx-auto">
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">UNITED NATIONS SECURITY COUNCIL (UNSC)</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Ensuring Peace and Institutional Recovery in Post-War Sudan. <br />
                        <span className="font-bold">Issue 2:</span> Addressing Maritime Security and Regional Stability in the Red Sea Region.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">COMMISSION ON CRIME PREVENTION AND CRIMINAL JUSTICE (CCPCJ)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Developing Legal Frameworks to Combact Cross-Border Organized Corruption Networks. <br />
                        <span className="font-bold">Issue 2:</span> Safeguarding Judicial Integrity Through International Monitoring Mechanism.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">UNITED NATIONS WOMAN (UNW)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Strengthening Women&apos;s Leadership in Peacebuilding through Regional Alliances. <br />
                        <span className="font-bold">Issue 2:</span> Enhancing Legal Safeguards for Woman in Informational and Domestic Employment.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">GENERAL ASSEMBLY: DISARMAMENT AND INTERNAL SECURITY COMMITTEE (GA-1)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Enhancing Global Cooperation on Prevent (State Sponsored) Cyberattacks on Essential Infrastructure. <br />  
                        <span className="font-bold">Issue 2:</span> Strengthening Compliance with the Biological Weapons Convention (BWC) and Preventing Global Biowarfare.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">GENERAL ASSEMBLY: ECONOMIC AND FINANCIAL COMMITTEE (GA-2)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Ensuring Equitable Benefit Sharing and Protection Against Biopiracy. <br />
                        <span className="font-bold">Issue 2:</span> Advancing ustainable Economic Growth in Developing Economies Through Responsible and Transparent Investement Practices.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">UNITED NATIONS HUMAN RIGHTS COUNCIL (UNHRC)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Addressing the Human Rights Violations Linked to AI Surveillance in Authoritarian Regimes. <br />
                        <span className="font-bold">Issue 2:</span> Safeguarding Fundamental Freedoms Amid Ethnic Tensions and Militarized Governance.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">UNITED NATIONS COMMISSION ON NARCOTIC DRUGS (UNCND)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Strengthening Cross-Border Collaboration to Disrupt Transnatinoal Drug Trafficking Networks. <br />
                        <span className="font-bold">Issue 2:</span> Promoting Multilateral Strategies for Preventing the Militarization of Drug Enforcement.
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">WORLD HEALTH ORGANISATION (WHO)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Strengthening Public Health Infrastructure through AI-Driven Data Management and Forecasting. <br />
                        <span className="font-bold">Issue 2:</span> Combatting Antimicrobial Resistance through Global Cooperation and Responsible Drug Use
                    </p>
                </div>
                <div className="mb-8 flex flex-col items-start gap-1">
                    <h2 className="text-3xl text-yellow-300 font-semibold mb-3">PEACE, JUSTICE AND STRONG INSTITUTIONS (UNITED NATIONS SDG-16)</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 text-start">
                        <span className="font-bold">Issue 1:</span> Safeguarding Legal Rights of Displaced Populations Through Global Judicial Mechanisms <br />
                        <span className="font-bold">Issue 2:</span> Ensuring Access to Justice and Rights Under Taliban Governance
                    </p>
                </div>
            </div>
        </div>
    );
}
