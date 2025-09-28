

export const PLANS = [
    {
        id: "starter",
        name: "Starter",
        monthly: 9,
        yearly: 90, //12 meses con descuento
        badge: null,
        features: ["Jusqu'à 3 projets", "Support par email", "Exportation CSV"],

    },

    {
        id: "pro",
        name: "Pro",
        monthly: 19,
        yearly: 190,
        badge: "Plus populaire", // etiqueta opcional
        features: ["Projets illimités", "Utilisateurs illimités", "Accès API"],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        monthly: 49,
        yearly: 490,
        badge: null,
        features: ["SSO SAML", "SLA 99.9%", "Gestionnaire dédié"],
    },

];