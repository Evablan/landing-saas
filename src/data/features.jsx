// Separar datos del componente te permite reordenar/añadir sin tocar JSX

export const FEATURES = [
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs>
                    <linearGradient id="lightning" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                </defs>
                <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill="url(#lightning)"
                    stroke="url(#lightning)"
                    strokeWidth="1.5"
                />
            </svg>
        ),
        title: "Rapide",
        text: "Chargement instantané et bonnes pratiques."
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs>
                    <linearGradient id="compass" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="10" stroke="url(#compass)" strokeWidth="2" fill="none" />
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#compass)" />
                <circle cx="12" cy="12" r="2" fill="white" />
            </svg>
        ),
        title: "Accessible",
        text: "Clavier, focus visible et contraste AA."
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <defs>
                    <linearGradient id="puzzle" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="url(#puzzle)"
                    stroke="url(#puzzle)"
                    strokeWidth="1.5"
                />
                <path
                    d="M8 12h8M12 8v8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        title: "Évolutif",
        text: "Composants réutilisables et clairs."
    },
];