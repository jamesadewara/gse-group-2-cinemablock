tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0d59f2",
                "background-light": "#f5f6f8",
                "background-dark": "#101622",
                "deep-black": "#050505", // Custom deep black for immersive cinematic feel
            },
            fontFamily: {
                "display": ["Spline Sans", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
        },
    },
}