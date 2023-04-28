import Link from "next/link"

export default function Header() {
    return (
        <div>
            <ul>
                <Link href={"/about"}>To About</Link>
            </ul>
        </div>
    )
};