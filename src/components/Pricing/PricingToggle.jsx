import { PLANS } from "../../data/plans";


/**
 * Toggle accesible:
 * -Este archivo representa a los dos botones del toggle. ( mensual y anual)
 * - No es un switch único; son dos botones conmutados.
 * - aria-pressed = true/false indica el estado del propio botón.
 */

export default function PricingSection({ value, onChange }) {
    const yearly = value === "yearly";

    return (
        <div
            role="group"
            aria-label="Ciclo de facturación"
            className="inline-flex items-center gap-2"
        >
            <button
                type="button"
                aria-pressed={!yearly}
                onClick={() => onChange("monthly")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${!yearly
                    ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
            >
                Mensuel
            </button>

            <button
                type="button"
                aria-pressed={yearly}
                onClick={() => onChange("yearly")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${yearly
                    ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
            >
                Annuel
            </button>
        </div>
    )


}