import '../styles/globals.css'
import Script from 'next/script'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
      <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" async/>
    </>
  )
}

export default MyApp
