import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {

          "primary": "#60d689",

          "secondary": "#69d14f",

          "accent": "#f760b8",

          "neutral": "#3a253c",

          "base-100": "#21374a",

          "info": "#75a2d7",

          "success": "#23955a",

          "warning": "#e88a17",

          "error": "#f03838",
          
          "body" : {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
}
export default config
