const baseConfig = require("../../tailwind.config.cjs")

/** @type {import('tailwindcss').Config} */
module.exports = {
	...baseConfig,
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
}
