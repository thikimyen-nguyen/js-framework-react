import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../Buttons";

export function CartDetail() {
    
    return (
    <div className="flex-col">
        <h1>YOUR CART</h1>
        <div className="text-center">
        <SecondaryButton label="Shop More"/>
        <Link to='/checkoutSuccess'><PrimaryButton label="Check Out" /></Link>
        </div>
        
    </div>
    );
}