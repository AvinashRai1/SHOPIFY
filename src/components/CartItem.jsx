
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >        

      <div className="border-2 mt-[10px] ">                     

        <div className="flex justify-center "> 
          <img className="h-[120px] " src={item.image} />   
        </div>
        <div className="flex flex-col justify-center items-center"> 
          <h1 className="font-bold">{item.title}</h1>  
          <h1 className="text-blue-600">{item.description.split(" ").slice(0,10).join(" ")}</h1>   
          <div>
            <p className="font-bold">{item.price}</p>    
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>  
            </div>
          </div> 

        </div>


      </div>

    </div>
  );
};

export default CartItem;
