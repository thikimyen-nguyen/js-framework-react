import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../Buttons";

function CartItem ({
    product: { id, title, discountedPrice, image, price },
  }) {
    return <div>heloo</div>
}

export function CartDetail() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    
    return (
    <div className="flex-col">
        <h1>Your Cart</h1>
       {cart?.map((product) => (
            <CartItem product={product} />
          ))
       } 
        <div className="text-center">
        <Link to='/'><SecondaryButton label="Shop More"/></Link>
        <Link to='/checkoutSuccess'><PrimaryButton label="Check Out" /></Link>
        </div>
        
    </div>
    );
}