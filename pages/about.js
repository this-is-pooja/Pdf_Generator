import Layout from './com/layout';
import React from 'react';
class about extends React.Component{
  render(){
  return(
  <Layout>
    <div>
      <h1>Pdf Generator is a powerful utility 
        for generating of your text into pdf.
        you can easily write and then generate
         your pdf in some seconds.................☺️</h1>
       
      <style jsx global>
     {`
     h1{
     color:Tomato;
     font-style: italic;
     font-size: 60px;
      }
     body{
     background:bisque;
     }
    `}</style>
    </div>
    </Layout>
  );
    }
}
export default about;
