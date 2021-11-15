import type { AppProps } from 'next/app'
import { FC } from 'react'
import { darkTheme, globalCss } from '../stitches.config'
import { ThemeProvider  } from 'next-themes'
import CursorProvider from '../lib/CursorContext'

const globalStyles = globalCss({
  '@import': "url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap')",
  'html, body': {
    fontFamily: "'Comfortaa', cursive",
    overflow: 'hidden',
    cursor: 'none',
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    transition: 'background .3s, color .3s  ',
  },
  '*::selection': {
    background: 'rgba(79, 5, 153, 0.8)',
    color: '$light',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  "@dark": {
    ":root:not(.light)": {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        // @ts-ignore
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
})

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </ThemeProvider>
  )
}

export default App;
