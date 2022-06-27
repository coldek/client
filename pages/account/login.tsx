import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Centered from "../../components/layouts/Centered";
import { useAuth } from "../../helpers/AuthContext";
import { getData } from "../../helpers/getData";

const LoginPage: NextPage = () => {
    const router = useRouter()
    const { isLoggedIn, login } = useAuth()

    if (isLoggedIn) router.push('/')

    type FormData = {
        username: string
        password: string
    }
    const [submitted, setSubmit] = useState(false)
    const [formData, setFormData] = useState<FormData>({ username: '', password: '' })

    const handle: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        setSubmit(true)

        const data = await login(formData.username, formData.password)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const UsernameErrors = () => {
        let errors: string[] = []

        if (formData.username.length > 0) {
            if (formData.username.length < 3) errors.push('Username is too short')
            if (formData.username.length > 24) errors.push('Username is too long')
        }

        return (
            <span className="text-red-600">
                {errors.map((error) => <span key={error}>{error}</span>)}
            </span>
        )
    }

    const PasswordErrors = () => {
        let errors: string[] = []

        if (formData.password.length > 0) {
            if (formData.password.length < 3) errors.push('Password is too short')
            if (formData.password.length > 128) errors.push('Password is too long')
        }

        return (
            <span className="text-red-600">
                {errors.map((error) => <span key={error}>{error}</span>)}
            </span>
        )
    }

    return (
        <Centered>
            <div className="heading">Login to Rapaxia</div>
            <form onSubmit={handle} className="mt-2 block">
                <fieldset disabled={submitted} className="">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" placeholder="Username" name="username" id="username" onChange={handleChange} />
                    <i className="fa-solid fa-user input"></i> <UsernameErrors />
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" placeholder="Password" name="password" id="password" onChange={handleChange} />
                    <i className="fa-solid fa-key input"></i> <PasswordErrors />
                    <button className="w-20 block mt-2">Submit</button>
                </fieldset>
            </form>
        </Centered >
    )
}

export default LoginPage