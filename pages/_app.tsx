import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Client from '../components/layouts/Client'
import { AppPropsWithLayout } from '../models/layou'

function MyApp({ Component, pageProps }: AppPropsWithLayout) 
{
  const LayoutWrapper = Component.Layout ?? Client
  return (
  <LayoutWrapper>
  <Component {...pageProps} />
  </LayoutWrapper>
  )
  
}

export default MyApp
