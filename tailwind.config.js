/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: { extend: {} },
    plugins: [],
    fontFamily: {
        sans: ["Inter", "sans-serif"], // fuente de la app  
        display: ["Plus Jakarta Sans", "sans-serif"], // fuente de los titulos
        body: ["Sora", "sans-serif"], // fuente de los textos
    },
}