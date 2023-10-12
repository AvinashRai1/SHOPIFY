import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice"; 
import { toast } from "react-hot-toast"; 

const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addCart=()=>{
    dispatch(add(post));
    toast.success("item added to cart");
  }
  const removeCart=()=>{
    dispatch(remove(post.id));
    toast.success("removed from cart");   
  }
  return(
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">       
      <div>
        <p className="text-gray-500 font-semibold text-lg text-left truncate w-40 mt-1 ">{post.title}</p>      
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")}</p>  
      </div>
      <div className="h-[180px]"> 
        <img src ={post.image} className="h-full w-full"/>    
      </div>
      <div className="flex gap-x-5">  
      <div className="text-green-500"> 
        ${post.price}
      </div>
      {
       cart.some((p) => p.id == post.id)? 
       (<button className="text-gray-500 border-2 border-gray-600 rounded-full font-semibold text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 ease in" onClick={removeCart}> 
        REMOVE
       </button>): 
       (<button className="text-gray-500 border-2 border-gray-600 rounded-full font-semibold text-[12px] p-1 px-3  hover:bg-gray-700 hover:text-white transition duration-300 ease in" onClick={addCart}>  
        ADD
       </button>)   
     
      } 
      </div>
    </div>
  )
};

export default Product;
