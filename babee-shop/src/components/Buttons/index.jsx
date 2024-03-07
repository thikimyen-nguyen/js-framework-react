import styles from "./index.module.css";
export function PrimaryButton({label}) {
    return (
        <button className={styles.primaryButton}>{label}</button>
    );
}
export function SecondaryButton({label}) {
    return (
        <button className={styles.secondaryButton}>{label}</button>
    );
}