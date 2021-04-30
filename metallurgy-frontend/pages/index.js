import Layout from '../components/layout'
import { withApollo } from '../lib/withApollo'

const IndexPage = () => {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is the starting point for using <a href={`https://next-auth.js.org`}>NextAuth.js</a> for a frontend to metallurgy information.
      </p>
    </Layout>
  )
}

export default withApollo()(IndexPage)