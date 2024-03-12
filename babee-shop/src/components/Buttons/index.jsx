import styles from "./index.module.css";
export function PrimaryButton({label, onClick, size}) {
    return (
        <button className={`${styles.primaryButton} hover:bg-hover`}  onClick={onClick}>{label}</button>
    );
}
export function SecondaryButton({label}) {
    return (
        <button className={styles.secondaryButton} >{label}</button>
    );
}