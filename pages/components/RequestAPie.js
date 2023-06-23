import styles from "@/styles/RequestAPie.module.css";

export default function RequestAPie() {
    return (
        <div className={styles.container}>
            <h2>Request a Pie.</h2>
            <div>
                <form className={styles.form_container}>
                    <input type="text" className={styles.input}></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};