import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="navbar bg-base-300">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">Post Tracker</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/'}>Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}