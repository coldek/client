import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Centered from "../../components/layouts/Centered";
import { useAuth } from "../../helpers/AuthContext";
import { server } from "../../helpers/config";
import { getData } from "../../helpers/getData";

const SignupPage: NextPage = ({ }) => {
    const router = useRouter()
    const { isLoggedIn } = useAuth()

    if (isLoggedIn) router.push('/')

    type FormData = {
        username: string
        email: string
        password: string
        c_password: string
        beta: string
    }
    const [submitted, setSubmit] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        c_password: '',
        beta: ''
    })

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()

        setSubmit(true)
    }

    return (
        <Centered>
            <div className="heading">Sign-Up Today for Rapaxia</div>
            <form onSubmit={handleSubmit} className="mt-2 block">
                <fieldset disabled={submitted}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" name="username" id="username" />
                    <i className="fa-solid fa-user input"></i>

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Address" name="email" id="email" />
                    <i className="fa-solid fa-user input"></i>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" name="password" id="password" />
                    <i className="fa-solid fa-user input"></i>

                    <label htmlFor="c_password">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" name="password" id="password" />
                    <i className="fa-solid fa-user input"></i>

                    <label htmlFor="beta">Beta Code</label>
                    <input type="text" placeholder="paste beta code here" name="beta" id="beta" />
                    <i className="fa-solid fa-user input"></i>

                    <button className="w-20 block mt-2">Sign Up</button>
                </fieldset>
            </form>
        </Centered>
    )
}

export default SignupPage