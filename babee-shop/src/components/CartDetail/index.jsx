import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../Buttons";

export function CartDetail() {
    
    return (
    <div className="flex-col">
        <h1>Your Cart</h1>
        <div className="text-center">
        <Link to='/'><SecondaryButton label="Shop More"/></Link>
        <Link to='/checkoutSuccess'><PrimaryButton label="Check Out" /></Link>
        </div>
        
    </div>
    );
}