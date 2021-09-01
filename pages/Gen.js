import Layout from "./com/layout";
import React  from 'react';
import jsPDF from 'jspdf';
import $ from 'jquery';
class CreateQuotes extends React.Component{
  constructor(props){
    super(props);
    this.state={
    value:"This is my pdf............."
    }
  }
  myfun(e){
    this.setState({value:e.target.value});
        };
jspdfGenerator=()=>{
var doc=new jsPDF('p','pt');
doc.setFont('courier');
doc.addFont('Calibri')
doc.text(20,20,this.state.value)
var splitTitle = doc.splitTextToSize($('#textarea').val(), 270);
    var pageHeight = doc.internal.pageSize.height;
  
    doc.setFontSize("5");
    var y = 7;
    for (var i = 0; i < splitTitle.length; i++) {                
        if (y > 280) {
            y = 10;
            doc.addPage();
        }
        doc.text(15, y, splitTitle[i]);
        y = y + 7;
    }
    doc.save('my.pdf');
}
  render(){
    return(
      <Layout>
    <div >
    <textarea className="text" id="com" rows='20' cols='100' type='text' onChange={(e)=>this.myfun(e)} >
    {this.state.value}
    </textarea>
      <br />
      <br />
      <button className="button" onClick={this.jspdfGenerator}>Generate_pdf</button>
      <style jsx global>
        {`
          h1 {
            color: blue;
          }
          body {
            background: lightcyan;
          }
          .button {
            padding: 15px 25px;
            font-size: 24px;
            text-align: center;
            cursor: pointer;
            outline: none;
            color: #fff;
            background-color: #4CAF50;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
            display: flex;
            margin-top:100px;
            height:30%;
            margin-left:280px;
            width: 50%;
            justify-content: center;
            }
          .button:hover {background-color: #3e8e41}
          
          .button:active {
            background-color: #3e8e41;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
             }
             .text{
              margin-left:160px;
              align:center;
            }
        `}
      </style>
    </div>
  </Layout>
);
  }
}
  
export default CreateQuotes;
