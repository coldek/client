import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../helpers/AuthContext'
import Layout from '../components/layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp