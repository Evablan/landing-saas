import { useState } from "react";
import Section from "../Section";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import { PLANS } from "../../data/plans";


export default function PricingSection() {

    const [cycle, setCycle] = useState("monthly"); // Estado para el ciclo de facturación

    return (
        <Section id="pricing" title="Plans transparents" subtitle="Changez entre mensuel et annuel."
            className="relative bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-[2rem] mx-4 border border-white/30">
            <div aria-hidden className="spotlight" style={{ "--x": "70%", "--y": "10%" }}></div>

            {/* Toggle mejorado con animación */}
            <div className="text-center mb-12 flex flex-col items-center">
                <div className="inline-flex items-center bg-white/50 dark:bg-neutral-800/50 rounded-full p-1 border border-gray-200 dark:border-neutral-700 shadow-sm">
                    <PricingToggle value={cycle} onChange={setCycle} />
                </div>
                {cycle === "yearly" && (
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-emerald-500/40 backdrop-blur-sm border border-emerald-400/50 rounded-full">
                        <span className="text-emerald-300 text-sm font-semibold dark:text-emerald-400">
                            💰 Économisez jusqu'à 20% avec la facturation annuelle
                        </span>
                    </div>
                )}
            </div>

            {/* Grid responsive con mejor espaciado */}
            <div className="grid gap-20 md:grid-cols-3 mt-8 max-w-6xl mx-auto">
                {PLANS.map((p, index) => (
                    <PricingCard
                        key={p.id}
                        plan={p}
                        cycle={cycle}
                        isPopular={p.badge === "Más popular"}
                        index={index}
                    />
                ))}
            </div>
        </Section>
    );
}



