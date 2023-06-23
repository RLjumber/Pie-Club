import styles from "@styles/POTM.module.css";


export default function PieOfTheMonth() {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <h2>Image</h2>
            </div>
            <div className={styles.text_container}>
                <h2>Pie Of The Month!</h2>
                <p>information about the pie of the month!</p>
            </div>
        </div>
    )
}