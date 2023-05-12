/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    // plugins: [
    //     require('@tailwindcss/forms'),
    // ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#ecfdf5",
                    "100": "#d1fae5",
                    "200": "#a7f3d0",
                    "300": "#6ee7b7",
                    "400": "#34d399",
                    "500": "#10b981",
                    "600": "#059669",
                    "700": "#047857",
                    "800": "#065f46",
                    "900": "#064e3b"
                }
            },
            screens: {
                // Телефоны и планшеты
                'sm': { 'min': '319px', 'max': '768px' },
                // => @media (min-width: 640px and max-width: 767px) { ... }

                'md': { 'min': '769px', 'max': '1025px' },
                // => @media (min-width: 768px and max-width: 1023px) { ... }

                // Нотбуки и больше
                'lg': { 'min': '769px' },
                // => @media (min-width: 1024px) { ... }


                'xl': { 'min': '1281px', 'max': '1536px' },
                // => @media (min-width: 1280px and max-width: 1535px) { ... }

                //Все экраны
                'desktop': { 'min': '1025px' }
                // => @media (min-width: 1536px) { ... }
            }
        },
    },
}
