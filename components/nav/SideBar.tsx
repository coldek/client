import Link from "next/link"
import React from "react"
import { useAuth } from "../../helpers/AuthContext"

const PageLink = (props: { href: string, name: string, icon?: string }) => (
    <Link href={props.href}>
        <a className="block no-underline px-4 py-2 m-2 hover:bg-gray-400 rounded-3xl">
            <span className="inline">{props?.icon && <i className={`${props.icon} mr-2`}></i>} {props.name}</span>
        </a>
    </Link>
)

export default function SideBar({ }) {
    const { isLoggedIn, user, logout } = useAuth()

    return (
        <div className="fixed top-16 bg-cyan-600 bg-opacity-[8%] z-10 shadow-xl w-60 h-screen">
            <PageLink href="/" name="Home" icon="fa-solid fa-house" />
            <PageLink href="/community" name="Communities" icon="fa-solid fa-bullhorn" />
            <PageLink href="/market" name="Market" icon="fa-solid fa-store" />
            {isLoggedIn && <>
                <hr />
                <PageLink href={`/users/${user?.id}`} name="Profile" icon="fa-solid fa-user" />
                <PageLink href="/account/settings" name="Settings" icon="fa-solid fa-gear" />
                <button onClick={logout} className="block no-underline px-4 py-2 m-2 hover:bg-gray-400 rounded-3xl text-red-400 font-bold">
                    <span><i className="fa-solid fa-right-from-bracket"></i> Sign Out</span>
                </button>
            </>}
        </div>
    )
}