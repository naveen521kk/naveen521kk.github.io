module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            lineHeight: {
                12: "3rem"
            },
            fontFamily: {
                sans: ["Open Sans", "ui-sans-serif", "system-ui", "Segoe UI"]
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
