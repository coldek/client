import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { User } from "../pages/api/auth/user"
import Cookies from "js-cookie"
import { getData } from './getData'


type AuthContextType = {
    isLoggedIn: boolean
    login: (username: string, password: string) => Promise<AuthContextType | undefined>
    logout: () => Promise<AuthContextType>
    token?: string
    user?: User
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
} as AuthContextType)

type Props = {
    children: ReactNode
}

export function getTokenFromHeader(authorization: string) {
    return authorization.split(' ')[1] || ``
}

export function AuthProvider({ children }: Props) {
    let value: AuthContextType = { isLoggedIn: false } as AuthContextType


    async function refresh(): Promise<AuthContextType> {
        const token = Cookies.get('token')

        if (token === undefined) {
            return {
                isLoggedIn: false,
                login,
                logout
            }
        }

        try {
            const user = (await getData({
                url: '/api/auth/user',
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })).user as User

            return {
                isLoggedIn: true,
                user,
                token,
                login,
                logout,
            }
        } catch (e) {
            return await logout()
        }
    }

    const login = async (username: string, password: string): Promise<AuthContextType | undefined> => {
        if (Cookies.get('token') !== undefined) return

        try {
            value.token = (await getData({
                url: '/api/auth/login',
                method: 'post',
                body: { username, password }
            }))?.token

            if (value.token === undefined) throw new Error('Invalid Credentials')

            Cookies.set('token', value.token)

            const auth = await refresh()
            setAuth(auth)
        } catch (e) {
            return
        }
    }
    const logout = async (): Promise<AuthContextType> => {
        Cookies.remove('token')

        const auth = await refresh()
        setAuth(auth)

        return auth
    }

    const [auth, setAuth] = useState<AuthContextType>(value)

    useEffect(() => {
        refresh().then(v => setAuth(v))
    }, [])

    return (
        <>
            <AuthContext.Provider value={auth}>
                {children}
            </AuthContext.Provider>
        </>
    )




}

export function useAuth() {
    return useContext(AuthContext)
}