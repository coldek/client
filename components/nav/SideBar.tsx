import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useAuth } from "../../helpers/AuthContext"

export default function SideBar({ }) {
    const { isLoggedIn, user, logout } = useAuth()
    const router = useRouter()

    const [expanded, setExpanded] = useState(false)

    const PageLink = (props: { href: string, name: string, icon?: string }) => (
        <Link href={props.href}>
            <a className="block no-underline px-4 py-2 m-2 hover:bg-gray-400 rounded-3xl">
                <span className="inline">{props?.icon && <i className={`${props.icon} mr-2`}></i>} {expanded && props.name}</span>
            </a>
        </Link>
    )

    return (
        <div className="fixed top-16 bg-[#c0cfd7] z-20 shadow-xl h-screen" style={{
            width: expanded ? '240px' : '65px'
        }}>
            <button className="block no-underline px-4 py-2 m-2 hover:bg-gray-400 rounded-3xl" onClick={() => setExpanded(!expanded)}>
                <span><i className="fa-solid fa-bars"></i></span>
            </button>
            <PageLink href="/" name={isLoggedIn ? 'Dashboard' : 'Home'} icon="fa-solid fa-house" />
            <PageLink href="/community" name="Communities" icon="fa-solid fa-bullhorn" />
            <PageLink href="/market" name="Market" icon="fa-solid fa-store" />
            <PageLink href="/users" name="Users" icon="fa-solid fa-users" />
            {isLoggedIn && <>
                <hr />
                <PageLink href={`/users/${user?.id}`} name="Profile" icon="fa-solid fa-user" />
                <PageLink href={`/inventory/${user?.id}`} name="Inventory" icon="fa-solid fa-box-open" />
                <PageLink href="/avatar" name="Avatar" icon="fa-solid fa-user-pen" />
                <PageLink href="/account/settings" name="Settings" icon="fa-solid fa-gear" />
                <button onClick={() => {
                    logout()
                    router.push('/account/login')
                }} className="block no-underline px-4 py-2 m-2 hover:bg-gray-400 rounded-3xl text-red-400 font-bold">
                    <span><i className="fa-solid fa-right-from-bracket"></i> {expanded && 'Sign Out'}</span>
                </button>
            </>}
        </div>
    )
}