"use client";

import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@styles/Header.module.css";

export default function Header() {

    const current = useRouter();
    console.log("current route = ", current.pathname)

    return (
        <div className={styles.header}>
            <ul>
                {current.pathname === "/" ? 
                <ul>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/recipes"}>Recipes</Link></li>
                </ul> 
                : null}
                {current.pathname === "/about" ? <Link href={"/"}>To Home</Link> : null}
                
            </ul>
        </div>
    )
};