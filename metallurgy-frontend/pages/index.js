import Layout from '../components/layout'
import { withApollo } from '../lib/withApollo'

// export default function Page () {
//   return (
//     <Layout>
//       <h1>NextAuth.js Example</h1>
//       <p>
//         This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
//       </p>
//     </Layout>
//   )
// }


const IndexPage = () => {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}

export default withApollo()(IndexPage)