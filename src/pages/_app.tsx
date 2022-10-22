import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~/styles/globals.css'
import '~/styles/antd.less'
import { ReactElement, ReactNode } from 'react'
import Layout from '~/components/organisms/layout/layout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <div>
      <Head>
        <title>POSSE WEB APP | PH3</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
