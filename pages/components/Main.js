import styles from "@styles/Main.module.css"
import Image from "next/image";
import PieOfTheMonth from "./PieOfTheMonth";
import RequestAPie from "./RequestAPie";


export default function Main() {

    return (
        <div className={styles.main}>
            <div className={styles.mainImage}>
                <h1 className={styles.title}>Main Content</h1>
                {/* possibly blur effect using placeholder="blur" later on */}
                <Image src={"/tablecloth (Medium).jpeg"} alt="something clever"  className={styles.mainImage} fill/>
            </div>
            <PieOfTheMonth />
            <RequestAPie />        
        </div>
    )
};