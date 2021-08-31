import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import { arrayBuffer } from 'stream/consumers';

const App =()=> {
  const[data,setData]=useState([]); 
  
  

useEffect(()=>{
  
  
  let obj=[
    {
      imgL:'https://media.istockphoto.com/photos/shopping-cart-or-trolley-on-tablet-with-sunlight-online-shopping-picture-id1217101233?b=1&k=6&m=1217101233&s=170667a&w=0&h=peOSRni2bVlUBYiyJxSRnJlbKSgXuaT3CwSHXOG19uI=',
      name:"Furniture",
      product:"chair",
      color:"red",
      length:'5485858',
      id:'xyz'
    },
    {
     imgL:'https://cdn.pixabay.com/photo/2016/05/25/20/17/icon-1415760__340.png',
     name:"Shoping",
     product:"cart image",
     color:"green",
     length:'54',
     id:'xyz'

   },
   {
     imgL:'https://freepngimg.com/static/img/cat/sunglasses.png',
     name:"Goggles",
     product:"sunglasses",
     color:"green",
     length:'54',
     id:'xyz'

   },
   {
     imgL:'https://freepngimg.com/static/img/cat/tree.png',
     name:"Tree",
     product:"tree",
     color:"green",
     length:'54',    
    id:'xyz'

   }
  ]
  function user(ob:any){
    setData(ob)
  }
  user(obj)
},[])

  return (
   <div className="container">
     <h4 style={{marginLeft:30}}>My Cart</h4>
     <hr style={{marginLeft:30,width:450}} />
     {
       data.map((item:any)=>{
         return(
           <div>
              <div className="imgdiv">  
             { console.log(item.imgL)}
                <img className="img" src={item.imgL} alt="image not found" />
              </div>
              
              <div className="content">

              <h3>{item.name}</h3>
              <p>{item.product}</p>
              <p>{item.color}</p>
              <p>{item.length}</p>
              </div>
              <hr style={{marginLeft:30,width:450}} />

           </div>
           
         )
       })
     }
     
     <div style={{marginRight:10,width:300}}>
     <div className="img">
     <p style={{marginLeft:130}}>Subtotal:</p>
     <p style={{marginLeft:130}}>Taxes & Duties:</p>
     <p style={{marginLeft:130}}>Shipping:</p>
     <p style={{marginLeft:130}}>Order Total:</p>
     </div>
     <div className="content">
       <p style={{marginLeft:150}}>$XXXX.xx HKD</p>
       <p style={{marginLeft:150}}>$XXXX.xx HKD</p>
       <p style={{marginLeft:150}}>$XXXX.xx HKD</p>
       <p style={{marginLeft:150}}>$XXXX.xx HKD</p>

     </div>
     </div>
   </div>
  );
}

export default App;
