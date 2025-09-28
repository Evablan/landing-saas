import { FAQS } from "../data/faqs";
import Section from "./Section";

/**
 * FAQ:
 * - <details><summary> es accesible y no requiere JS extra
 * - Cada item es independiente y navegable con teclado
 */

export default function FAQ() {
    return (
        <Section
            id="faq"
            title="Questions fréquentes"
            titleClassName="text-3xl md:text-5xl font-extrabold tracking-[-0.01em] leading-[1.1] text-white"
        >
            <div className="space-y-4 max-w-3xl mx-auto">
                {FAQS.map((item, i) => (
                    <details key={i} className="group rounded-2xl border border-white/20 p-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                        <summary className="cursor-pointer font-semibold text-white text-lg focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2 -m-2 hover:text-white/90 transition-colors duration-300 flex items-center gap-3">
                            <span className="text-white/80 group-hover:text-white transition-colors duration-300">▶</span>
                            {item.q}
                        </summary>
                        <p className="mt-4 text-white/80 text-base leading-relaxed pl-6">{item.a}</p>
                    </details>
                ))}
            </div>
        </Section>
    );



}