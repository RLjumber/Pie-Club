"use client";

import Link from "next/link"
import { useRouter } from "next/router"
import styles from "@styles/Header.module.css";

export default function Header() {

    const current = useRouter();
    console.log("current route = ", current.pathname)

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>logo</h1>
            </div>
            <div className={styles.links}>
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
        </div>
    )
};