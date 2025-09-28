import Container from "./ui/Container";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";


/**
 * Carrusel de logos:
 * - Duplicamos la lista para un bucle continuo
 * - Animación CSS que mueve la "cinta" la mitad de su ancho (-50%)
 * - Pausa al pasar el ratón y respeta prefers-reduced-motion
 * - Using placeholder logos for immediate loading
 */
export default function Logos() {
    const logos = [
        { src: logo1, alt: "Empresa Uno" },
        { src: logo2, alt: "Empresa Dos" },
        { src: logo3, alt: "Empresa Tres" },
        { src: logo4, alt: "Empresa Cuatro" },
        { src: logo1, alt: "Empresa Cinco" },
        { src: logo4, alt: "Empresa Seis" },
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
                                className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition mx-6"
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
