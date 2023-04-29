import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {

    const router = useRouter();

    // console.log(router.pathname)

    return (
        <div>
            <ul>
                {router.pathname === "/" ? <Link href={"/about"}>To About</Link> : null}
                {router.pathname === "/about" ? <Link href={"/"}>To Home</Link> : null}
            </ul>
        </div>
    )
};