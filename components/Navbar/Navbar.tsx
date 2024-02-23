import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
    return (
        <nav className="navbar bg-base-300 fixed top-0 z-10">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">Post Tracker</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    <li><Link href={'/login'}><UserCircleIcon className="w-8 h-8" /></Link></li>
                </ul>
            </div>
        </nav>
    )
}