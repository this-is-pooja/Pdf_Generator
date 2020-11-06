import Head from 'next/head';
import Navbar from '../com/navbar';
const Layout=(props)=>(
  <div>
    <Head>
      <title >Gen_pdf.net</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      </Head>
      <div>
  <Navbar />
  {props.children}
  </div>
  <style jsx global>
  {`
  
  `}</style>
  </div>
)

export default Layout;