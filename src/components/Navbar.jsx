import Container from "./ui/Container";

/**
 * Objetivos didácticos:
 * - Semántica: <header> + <nav aria-label="Principal">
 * - Composición: reutilizamos <Container> para el ancho y padding
 * - Accesibilidad: enlaces claros + aria-label en el botón de tema
 * - Tema oscuro: togglear la clase 'dark' en <html>
 */
export default function Navbar() {
    // Cambia entre tema claro/oscuro añadiendo o quitando la clase 'dark' en <html>
    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header
            className="
      sticky top-0 z-10 border-b bg-white/10 dark:bg-black/10 backdrop-blur-md
      "
        >
            <Container className="flex h-16 items-center justify-between">
                {/* Zona izquierda: marca/logo mejorado */}
                <div className="text-2xl font-bold text-white tracking-tight">
                    <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        MonLogo
                    </span>
                </div>

                {/* Zona central: navegación principal mejorada */}
                <nav aria-label="Principal" className="hidden md:flex gap-8">
                    <a
                        href="#features"
                        className="text-white/90 hover:text-white font-medium text-base transition-all duration-300 hover:scale-105 relative group"
                    >
                        Fonctionnalités
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#pricing"
                        className="text-white/90 hover:text-white font-medium text-base transition-all duration-300 hover:scale-105 relative group"
                    >
                        Tarifs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#faq"
                        className="text-white/90 hover:text-white font-medium text-base transition-all duration-300 hover:scale-105 relative group"
                    >
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                {/* Zona derecha: control de tema mejorado */}
                <button
                    type="button"
                    onClick={toggleDark}
                    aria-label="Changer le thème (clair/sombre)"
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-medium text-sm rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                    🌙 Thème
                </button>
            </Container>
        </header>
    );
}
