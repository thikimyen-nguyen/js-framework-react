import { PrimaryButton, SecondaryButton } from "../Buttons";

export function CartDetail() {
    return <div className="flex">
        <SecondaryButton label="Shop More"/>
        <PrimaryButton label="Check Out"/>
    </div>
}