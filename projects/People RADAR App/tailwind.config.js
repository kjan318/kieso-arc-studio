module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0c0d10",
                surface: "#1a1b1e",
                surfaceHover: "#23252a",
                card: "#1e1e24",
                border: "#2A2D35",
                brand: "#a3f4e3",
                textMain: "#f3f4f6",
                textMuted: "#9ca3af",
                textSubdued: "#6b7280"
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
