/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto'],
            },
            colors:{
                primary:"#082967",
                "primary-focus": "#194494",
                neutral:"#353535",
                "neutral-content":"#8b8b8b",
                "neutral-content-light":"#c8c8c8"
            }
        },
    },
    plugins: [
        require("daisyui"),
    ],
    darkMode: 'class',
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "primary": "#082967",
                    "primary-focus": "#194494",
                },
            },
        ],
    },
}

