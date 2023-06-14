/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
        theme: {
            extend: {
                colors: {
                    "bg": "#2b303a",
                    "fg": "#0d1117",

                    "w": "#f1f1f1",
                    "link": "#489bf7",
                    "link-visited": "#6d1acc"
                },
                backgroundImage: {
                    'home': "url('/pg-img/seasons/2022S/gkcr/2022s-gkcr-03.webp')"
                }
            }
        },
        plugins: []
};