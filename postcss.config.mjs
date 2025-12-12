const config = {
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--color-brand-primary)",
        "brand-secondary": "var(--color-brand-secondary)",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
