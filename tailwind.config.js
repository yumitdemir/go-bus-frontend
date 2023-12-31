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
                "primary-light":"#5d8ade",
                "primary-focus": "#194494",
                neutral:"#353535",
                "neutral-content":"#8b8b8b",
                "neutral-content-light":"#c8c8c8",
                "neutral-content-hover":"#f0f0f0",
                "neutral-content-text":"#777069ff",
                secondary:"#e36934"
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
                    secondary:"#e36934"
                },
            },
        ],
    },
}

