import Layout from "./com/layout";
import Button from "@material-ui/core/Button";
import Link from 'next/link';
const IndexPage=()=> (
  <Layout>
    <div>
      <h1>
        <strong>Generate your pdf.......</strong>
      </h1>
      <h2>easily generate your pdf with gen.pdf</h2>
      
      <br />
      
      <Link href="/Gen" passHref>
      <Button variant="contained" color="secondary">Go to write text</Button>
      </Link>

      <style jsx global>
        {`
          h1 {
            color: red;
            font-weight: 900;
            font-family: serif;
            font-size: 80px;
          }
          body {
            background: lightgoldenrodyellow;
            text-align: center;
          }
          Button {
            height: 50px;
            width: 360px;
          }
          
        `}
      </style>
    </div>
  </Layout>
);


export default IndexPage;
