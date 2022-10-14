import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"/>
    </>
  )
}

export default MyApp
