import logo from './logo.svg';
import './MiniCart.css';
import {useState,useEffect} from 'react';
import { arrayBuffer } from 'stream/consumers';

const MiniCart=()=> {
  const bag='./images/bag.png';
  const watch='./images/watch.png';
  const gogles='./images/gogless.png';
  let obj=[
    {
      
      imgL:bag,
      name:"Laptop Bags",
      product:"Bag",
      color:"Color: Gray",
      length:'L - 987W39783DL984',
      id:'$XX.XX HKD'
    },
    {
     imgL:watch,
     name:" Men Watch",
     product:"Watch",
     color:"Color: Silver",
     length:'L - 233DL984',
     id:'$XX.XX HKD'

   },
   {
     imgL:gogles,
     name:"Goggles",
     product:"Sunglasses",
     color:"Color: Sky-blue",
     length:'L - 987W6',
     id:'$XX.XX HKD'

   }
  ]
  
  



  return (
    <section className="Mycart">
		<div className="container">
      <div className="inner-wrapper">
			<div className="CartWidth">
				<h1>MY CART.</h1>
        {
          obj.map((item)=>{
            return(
              <div className="CartData" key={item.color}>
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
                  <p className="ProductName prdct-id">{item.length}</p>
                </div>
              </div>
              </div>
            )
              
            
          })
        }

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
			
	</section>
  );
}

export default MiniCart;
