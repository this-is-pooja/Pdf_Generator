import Link from 'next/link'
import Button from '@material-ui/core/Button'
const Navbar=(props)=>(
 <div>
     
<ul>
    {/* ////////////////align class added/////////////////// */}
    <li className="align">Gen_pdf.net</li>
    {/* ///////////////////////////////////////////// */}
    <li><Link href="/" passHref><Button variant="contained"
color="secondary" border="3px solid black">Home</Button></Link></li>
    <li><Link href="/about" passHref><Button variant="contained"
color="secondary">About</Button></Link></li>
    <li><Link href="/contact" passHref><Button variant="contained"
color="secondary">contact us</Button></Link></li>
</ul>
<div className="footer">
    <p className="p">&copy;copywrite 2020 Gen_pdf.net </p>
  </div>
    <style jsx>
{`
ul{
background:#333;
Display:flex;
justify-content: flex-end;
height: 60px;
list-style:none;
color:#fff;
align-items: center;
margin-top:-10px;
margin-right:-8px;
margin-left:-8px;
padding-top:8px;
}

ul li{
font-size:30px;
margin-right:20px;
}

ul li a{
color:#fff;
text-decoration-style:solid;
}
ul li.align {
    position: absolute;
    left: 0;
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
  }
  .p{
      text-align:center;
      color:#fff;
      padding: 10px;
  }
`}
    </style>
  </div>
 
)
export default Navbar;