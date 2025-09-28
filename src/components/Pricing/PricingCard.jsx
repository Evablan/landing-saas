import Button from "../ui/Button";

/**
 * PricingCard
 * - Presenta un plan en función del 'cycle' (monthly/yearly)
 * - Calcula 'save' solo para anual
 */

export default function PricingCard({ plan, cycle, isPopular = false, index }) {
    const price = cycle === "monthly" ? plan.monthly : plan.yearly;
    const save = plan.monthly * 12 - plan.yearly; //ahorro anual derivado

    return (
        <article className={`relative rounded-3xl border p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isPopular
            ? 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50 border-blue-200 dark:border-blue-800 ring-2 ring-blue-500/20 dark:ring-blue-400/20'
            : 'bg-white/80 dark:bg-neutral-900/80 border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600'
            }`}>

            {/* Badge popular mejorado */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        ⭐ {plan.badge}
                    </span>
                </div>
            )}

            {/* Header con icono */}
            <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${isPopular
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400'
                    }`}>
                    <span className="text-2xl">
                        {index === 0 ? '🚀' : index === 1 ? '💎' : '🏢'}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
            </div>

            {/* Precio mejorado */}
            <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">{price}€</span>
                    <span className="text-lg text-gray-500 dark:text-gray-400 ml-2">
                        / {cycle === "monthly" ? "mois" : "an"}
                    </span>
                </div>

                {cycle === "yearly" && (
                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                        💰 Vous économisez {save}€ par an
                    </div>
                )}
            </div>

            {/* Features con iconos mejorados */}
            <ul className="space-y-4 mb-8">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                            <span className="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{f}</span>
                    </li>
                ))}
            </ul>

            {/* Botón mejorado */}
            <Button
                className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${isPopular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900'
                    }`}
                aria-label={`Choisir le plan ${plan.name}`}
            >
                {isPopular ? '🚀 Commencer maintenant' : 'Commencer maintenant'}
            </Button>
        </article>
    );


}