import logo from './logo.svg';
import './style.css';

import {useState,useEffect} from 'react';
import { arrayBuffer } from 'stream/consumers';

const App =()=> {

  let obj=[
    {
      
      imgL:'https://rukminim1.flixcart.com/image/495/594/klv7ekw0/backpack/6/9/m/backpack-uniq001-laptop-backpack-hp-original-imafa8kfgtnzjhas.jpeg?q=50',
      name:"Laptop Bags",
      product:"Bag",
      color:"Gray",
      length:'L - 987W39783DL984',
      id:'XX.XX HKD'
    },
    {
     imgL:'https://rukminim1.flixcart.com/image/495/594/kigbjbk0-0/watch/k/n/p/dz7432-diesel-original-imafy8ggrbzkbsg2.jpeg?q=50',
     name:" Men Watch",
     product:"Watch",
     color:"Silver",
     length:'L - 233DL984',
     id:'XX.XX HKD'

   },
   {
     imgL:'https://freepngimg.com/static/img/cat/sunglasses.png',
     name:"Goggles",
     product:"Sunglasses",
     color:"Sky-blue",
     length:'L - 987W6',
     id:'XX.XX HKD'

   },
   {
     imgL:'https://rukminim1.flixcart.com/image/495/594/ks99aq80/hand-messenger-bag/l/4/i/ganti-latkan-blue-ganti-latkan-blue-hand-held-bag-bellina-original-imag5vf4ywcugh7x.jpeg?q=50',
     name:"Hand Bags",
     product:"Women Hand Bags",
     color:"Blue",
     length:'L - 987W3978',    
    id:'XX.XX HKD'

   }
  ]
  
  



  return (
    <section className="Mycart">
		<div className="container">
      <div className="inner-wrapper">
     <p className="mini-cart"> Mini Cart </p>
			<div className="CartWidth">
				<h1>My Cart</h1>
        {
          obj.map((item)=>{
            return(
              <div className="CartData">
              <div className="row br-bottom">
                <div className="ColnLeft">
                  <div className="Image">
                    <img src={item.imgL} alt="Product" />
                  </div>
                </div>
                <div className="ColnCenter">
                  <div className="d-flex justify-content-between">
                    <div className="Name">{item.name}</div>
                    <div className="Content">{item.id}</div>
                  </div>
                  <p className="ProductName mt--5">{item.name}</p>
                  <p className="ProductName">{item.color}</p>
                  <p className="ProductName">{item.length}</p>
                </div>
              </div>
              </div>
            )
              
            
          })
        }
{/*         
				<div className="CartData">
					<div className="row br-bottom">
						<div className="ColnLeft">
							<div className="Image">
								<img src="https://freepngimg.com/static/img/cat/tree.png" alt="Product" />
							</div>
						</div>
						<div className="ColnCenter">
							<div className="d-flex justify-content-between">
								<div className="Name">NAME BRAND.</div>
								<div className="Content">$XXX.XX HKD</div>
							</div>
							<p className="ProductName">Product Name</p>
							<p className="ProductName">Color: Black</p>
							<p className="ProductName">L - 987W39783DL984</p>
						</div>
					</div>
					<div className="row br-bottom">
						<div className="ColnLeft">
							<div className="Image">
								<img src="images/product.png" alt="Product" />
							</div>
						</div>
						<div className="ColnCenter">
							<div className="d-flex justify-content-between">
								<div className="Name">NAME BRAND.</div>
								<div className="Content">$XXX.XX HKD</div>
							</div>
							<p className="ProductName">Product Name</p>
							<p className="ProductName">Color: Black</p>
							<p className="ProductName">L - 987W39783DL984</p>
						</div>
					</div>
					<div className="row br-bottom">
						<div className="ColnLeft">
							<div className="Image">
								<img src="images/product.png" alt="Product" />
							</div>
						</div>
						<div className="ColnCenter">
							<div className="d-flex justify-content-between">
								<div className="Name">NAME BRAND.</div>
								<div className="Content">$XXX.XX HKD</div>
							</div>
							<p className="ProductName">Product Name</p>
							<p className="ProductName">Color: Black</p>
							<p className="ProductName">L - 987W39783DL984</p>
						</div> */}
            <div className="total">
						<div className="total-col-left">
							<p className="sub-title">Subtotal:</p>
							<p className="sub-title">Taxes & Duties:</p>
							<p className="sub-title">Shipping:</p>
							<p className="title-bold">Order Total:</p>
						</div>
						<div className="total-col-left">
							<p className="sub-title">$XXXXX.XX HKD</p>
							<p className="sub-title">$XXX.XX HKD</p>
							<p className="sub-title">$XX.XX HKD</p>
							<p className="title-bold">$XXXXX.XX HKD</p>
						</div>
					</div>
					</div>
      </div>
					
				</div>
			{/* </div> */}
		{/* </div> */}
	</section>
  );
}

export default App;
