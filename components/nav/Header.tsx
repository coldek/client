import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useAuth } from "../../helpers/AuthContext";
import { server, imageServer } from "../../helpers/config"
import Dropdown from "../Dropdown";

export default function Header() {
    const { isLoggedIn, user } = useAuth()


    return (
        <>
            <Script src="https://kit.fontawesome.com/b33de8e240.js" crossOrigin="anonymous" />

            <div className="fixed w-full top-0 flex h-16 bg-cyan-600 border-b-2 border-b-cyan-800 p-2 z-20">
                <div className="flex grow my-auto">
                    <div>
                        <Image src={`/img/logo_long.png`} height={50} width={177} />
                    </div>
                </div>

                <div className="flex flex-row-reverse grow my-auto">
                    {isLoggedIn ?
                        <>
                            <img src={`${imageServer}/avatars/headshots/${user?.avatar.cache}.png`} className="rounded-full" width={50} height={50} />
                        </>
                        :
                        <>
                            <Link href={`/account/signup`}>
                                <a className="bg-green-500 hover:bg-green-600 py-[12px] px-4 text-white rounded-xl border-green-900">
                                    Sign Up<i className="fa-solid fa-user-plus ml-2"></i>
                                </a>
                            </Link>
                            <Link href={`/account/login`}>
                                <a className="py-[12px] mx-2 hover:text-neutral-600 text-neutral-300">
                                    Login
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}