import styles from "./index.module.css";
export function PrimaryButton({label, onClick}) {
    return (
        <button className={styles.primaryButton}  onClick={onClick}>{label}</button>
    );
}
export function SecondaryButton({label}) {
    return (
        <button className={styles.secondaryButton} >{label}</button>
    );
}