import Container from "./ui/Container";

/**
 * Carrusel de logos:
 * - Duplicamos la lista para un bucle continuo
 * - Animación CSS que mueve la "cinta" la mitad de su ancho (-50%)
 * - Pausa al pasar el ratón y respeta prefers-reduced-motion
 * - Using placeholder logos for immediate loading
 */
export default function Logos() {
    const logos = [
        { src: "https://via.placeholder.com/150x60/3b82f6/ffffff?text=Company+1", alt: "Empresa Uno" },
        { src: "https://via.placeholder.com/150x60/10b981/ffffff?text=Company+2", alt: "Empresa Dos" },
        { src: "https://via.placeholder.com/150x60/f59e0b/ffffff?text=Company+3", alt: "Empresa Tres" },
        { src: "https://via.placeholder.com/150x60/ef4444/ffffff?text=Company+4", alt: "Empresa Cuatro" },
        { src: "https://via.placeholder.com/150x60/8b5cf6/ffffff?text=Company+5", alt: "Empresa Cinco" },
        { src: "https://via.placeholder.com/150x60/06b6d4/ffffff?text=Company+6", alt: "Empresa Seis" },
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
                                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition mx-6"
                                onError={(e) => {
                                    console.log('Error loading logo:', it.src);
                                    e.target.style.display = 'none';
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
