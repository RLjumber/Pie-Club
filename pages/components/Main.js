import styles from "../../styles/Main.module.css"

export default function Main() {

    return (
        <div className={styles.main}>
            <h1>Main Content</h1>
            <div className={styles.columns}>
                <h2>Whats going on</h2>
                <h2>Ayo</h2>
            </div>
        </div>
    )
};