import { createStitches } from '@stitches/react';

export const { styled, globalCss, getCssText, createTheme, keyframes, theme } = createStitches({
  theme: {
    colors: {
      extraLight: '#FFFFFF',
      light: '#f1f3f5',
      gray: '#7e868c',
      black: '#11181c',
      red: '#ca3214',
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
  },
});

export const darkTheme = createTheme({
  colors: {
    black: '#FFFFFF',
    gray: '#889096',
    light: '#2f3335',
    extraLight: '#11181c',
  },
});
