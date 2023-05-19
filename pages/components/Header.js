"use client";

import Link from "next/link"
import { useRouter } from "next/router"

export default function Header() {

    const current = useRouter();
    console.log("current route = ", current.pathname)

    return (
        <div className={styles.header}>
            <ul>
                {current.pathname === "/" ? <Link href={"/about"}>To About</Link> : null}
                {current.pathname === "/about" ? <Link href={"/"}>To Home</Link> : null}
            </ul>
        </div>
    )
};