import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~/styles/globals.css'
import '~/styles/antd.less'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import Layout from '~/components/organisms/layout/layout'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { useRouter } from 'next/router'
import { config as awsConfig } from '~/env/aws'
import { setCurrentUser } from '~/modules/features/auth/authSlice'
import { Provider } from 'react-redux'
import { store } from '~/modules/store'
import { Amplify } from 'aws-amplify'
import { configure } from '~/modules/requests'

Amplify.configure(awsConfig)
configure()

interface AuthGuardProps {
  children: any
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [accessUrl, setAccessUrl] = useState('/')
  const { user, isCurrentUserChecked } = useAppSelector((state) => state.auth)
  const isSignedIn = !!user
  const signInPathname = '/sign-in'

  useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  useEffect(() => {
    if (!isCurrentUserChecked) {
      return
    }
    if (!isSignedIn && router.pathname !== '/sign-in') {
      setAccessUrl(router.asPath)
      router.push('/sign-in')
      return
    }
    if (isSignedIn && router.pathname === '/sign-in') {
      router.push(accessUrl)
      return
    }
  }, [router, isCurrentUserChecked, accessUrl, isSignedIn])

  return (isCurrentUserChecked && isSignedIn) ||
    router.pathname === signInPathname
    ? children
    : null
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <Provider store={store}>
      <Head>
        <title>POSSE WEB APP | PH3</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <AuthGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthGuard>
    </Provider>
  )
}

export default MyApp
