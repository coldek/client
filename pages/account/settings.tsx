import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useAuth } from "../../helpers/AuthContext";
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
    try {
        const token = jwt.verify(context.req.cookies?.token, jwtPub, { algorithms: ["RS256"] })
        return { props: {} }
    } catch (e) {
        return { notFound: true }
    }
}

export default SettingsPage