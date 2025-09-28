import Section from "./Section";
import { FEATURES } from "../data/features";

export default function Features() {

    return (
        <Section
            id="features"
            title="L'important, bien fait"
            subtitle="Performance, accessibilité et évolutivité."
            titleClassName="text-3xl md:text-5xl font-extrabold tracking-[-0.01em] leading-[1.1] text-white"
            subtitleClassName="text-lg md:text-xl text-white/80 leading-8"
        >
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {FEATURES.map((f) => (
                    <article key={f.title} className="rounded-2xl border border-white/20 p-6 bg-white/20 backdrop-blur-sm">
                        {/* Icono decorativo: aria-hidden para no distraer al lector de pantalla */}
                        <div className="text-2xl mb-2" aria-hidden="true">{f.icon}</div>

                        <h3 className="font-semibold text-white">{f.title}</h3>
                        <p className="text-white/80 mt-1 text-sm">
                            {f.text}
                        </p>
                    </article>
                ))}
            </div>

        </Section>
    );
}
