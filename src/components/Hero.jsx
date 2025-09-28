import { useState } from "react"; // Importamos useState para manejar el estado del formulario
import Container from "./ui/Container";

/**
 * Hero:
 * - Encabezado claro (h1) + breve explicación (p)
 * - Formulario con un input controlado (useState) y un botón submit
 * - Validación mínima de email y mensaje de feedback
 */

export default function Hero() {
    const [email, setEmail] = useState(""); // Estado para el email
    const [msg, setMsg] = useState(""); // Estado para el mensaje de feedback


    const onSubmit = (e) => {

        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setMsg(ok ? "Merci ! Nous vous contacterons bientôt." : "Veuillez saisir un email valide.");
    };

    return (
        <section className="relative py-24 text-center">

            <div aria-hidden className="spotlight" style={{ "--x": "50%", "--y": "20%" }}></div>
            <Container>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                    Lancez votre SaaS en jours, pas en mois
                </h1>

                <p className="mt-3 text-white/80 dark:text-neutral-300">
                    Modèle accessible, rapide et prêt pour la production.
                </p>

                {/* Formulario accesible: input con aria-label y botón submit */}
                <form onSubmit={onSubmit} className="mt-8 flex justify-center items-center max-w-lg mx-auto">
                    <div className="relative w-full">
                        <input
                            aria-label="Votre email"
                            className="w-full h-16 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md text-white placeholder-white/70 pl-6 pr-32 py-4 text-lg font-medium focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/60 transition-all duration-300 hover:bg-white/15 shadow-lg"
                            placeholder="votre@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}   // input controlado
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 text-sm font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            🚀 Essayer gratuitement
                        </button>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                </form>

                {/* Mensaje de feedback condicionado por la validación */}
                {msg && <p className="mt-2 text-base text-white/90">{msg}</p>}
            </Container>
        </section>
    );
}