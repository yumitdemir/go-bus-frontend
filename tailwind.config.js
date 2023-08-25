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

