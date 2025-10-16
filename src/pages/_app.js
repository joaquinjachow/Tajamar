import '@styles/globals.css'
import WhatsAppButton from 'src/Components/Icons/Whatsaap'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  )
}
