import styles from "./index.module.css";
export function PrimaryButton({label}) {
    return (
        <button className={styles.primaryButton}>{label}</button>
    );
}