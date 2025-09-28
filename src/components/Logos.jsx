import Container from "./ui/Container";

/**
 * Carrusel de logos:
 * - Duplicamos la lista para un bucle continuo
 * - Animación CSS que mueve la “cinta” la mitad de su ancho (-50%)
 * - Pausa al pasar el ratón y respeta prefers-reduced-motion
 */
export default function Logos() {
    const logos = [
        { src: "/src/assets/logo1.jpg", alt: "Empresa Uno" },
        { src: "/src/assets/logo2.jpg", alt: "Empresa Dos" },
        { src: "/src/assets/logo3.jpg", alt: "Empresa Tres" },
        { src: "/src/assets/logo4.jpg", alt: "Empresa Cuatro" },
        { src: "/src/assets/logo1.jpg", alt: "Empresa Cinco" },
        { src: "/src/assets/logo4.jpg", alt: "Empresa Seis" },
    ];

    // Duplicamos para que al llegar al 50% continúe sin salto
    const loop = [...logos, ...logos];

    return (
        <section aria-labelledby="logos-title" className="py-10">
            <Container>
                <p id="logos-title" className="text-center text-lg uppercase tracking-widest text-white/70">
                    Fait confiance par des équipes comme
                </p>

                <div className="marquee-viewport mt-6 overflow-hidden">
                    <div className="marquee-track flex gap-8 items-center">
                        {loop.map((it, i) => (
                            <img
                                key={i}
                                src={it.src}
                                alt={it.alt}
                                loading="lazy"
                                className="h-40 w-auto object-contain opacity-80  hover:opacity-100 transition mx-6"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
