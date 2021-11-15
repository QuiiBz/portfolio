import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText, createTheme, keyframes } = createStitches({
  theme: {
    colors: {
      extraLight: 'hsl(210 6.0% 93.0%)',
      light: 'hsl(253 4.0% 63.7%)',
      gray: 'hsl(203 6.0% 24.3%)',
      black: 'hsl(200 7.0% 8.8%)',
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
  },
})

export const darkTheme = createTheme({
  colors: {
    black: 'hsl(210 6.0% 93.0%)',
    gray: 'hsl(253 4.0% 63.7%)',
    light: 'hsl(203 6.0% 24.3%)',
    extraLight: 'hsl(200 7.0% 8.8%)',
  }
})
