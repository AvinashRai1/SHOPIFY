import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0); 

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >   
  {
    cart.length > 0  ? 
    (<div className=" flex max-w-6xl justify-between" >     


      <div className=" ml-[50px] mt-[20px]"   >                         
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div> 

      <div className=" h-[100px] flex flex-col justify-between">      

        <div >
          <div className="font-bold">Your Cart</div> 
          
          <div>Summary:</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>  

        <div>
          <p className="text-green-700">Total Amount: ${totalAmount}</p>  
          <NavLink to= "/"> 
          <button className="bg-black rounded-full text-white p-1 px-3" >    
            CheckOut Now
          </button> 
          </NavLink>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}> 
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
