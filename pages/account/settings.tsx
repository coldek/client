import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { getSession, useAuth } from "../../helpers/AuthContext";
import * as cookie from 'cookie'
import jwt, { Secret } from 'jsonwebtoken'
import { jwtPub } from "../../helpers/config";

const SettingsPage: NextPage = () => {
    return (
        <>
            Settings
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const isLoggedIn = getSession(context)

    if(isLoggedIn) {
        return {
            props: {}
        }
    } else {
        return {
            redirect: {
                destination: '/account/login',
                permanent: false
            }
        }
    }
}

export default SettingsPage