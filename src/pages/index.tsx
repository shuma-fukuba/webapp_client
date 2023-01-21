import type { NextPage } from 'next'
import Content from '~/components/organisms/home'
import Layout from '~/components/organisms/layout/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default Home
