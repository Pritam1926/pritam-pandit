tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#3713ec",
                "background-dark": "#0a0a12",
                "accent-navy": "#131022",
                "card-dark": "#1a172e",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            boxShadow: {
                "glow": "0 0 15px rgba(55, 19, 236, 0.3)",
            }
        },
    },
}
