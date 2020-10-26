import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ColorModeProvider value={ "light" }>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
