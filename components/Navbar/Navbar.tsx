import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
    return (
        <nav className="top-0 fixed w-full bg-blue-500 px-4 py-8 rounded-b-xl drop-shadow-xl">
            <div className="flex justify-between">
                <div className="flex-1">
                    <Link className="text-2xl font-semibold" href="/">PostTrack</Link>
                </div>
                <div className="rounded-full hover:bg-blue-200">
                    <ul>
                        <li><Link href={'/login'}><UserCircleIcon className="w-8 h-8" /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}