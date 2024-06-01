import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { server } from "../../helpers/config";
import { getData } from "../../helpers/getData";
import { User } from "../api/auth/user";
import DefaultErrorPage from 'next/error'
import Image from "next/image";

const UserPage: NextPage<any> = ({ data }) => {
    const router = useRouter()
    if (data?.statusCode) return <DefaultErrorPage statusCode={data.statusCode} />

    const user = data.user
    console.log({user})
    return (
        <>
            <div className="inline-block">

            <Image alt="test" fill src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/avatars/body/${user.avatar.cache}.png`} />
            </div>
            test {user.id}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    let data = {} as any

    if (params !== undefined) {
        try {
            data.user = {
                ...await getData({
                    url: `${server}/users/${params.id}`,
                    method: 'get'
                })
            }
        } catch (e) {
            res.statusCode = 404
            data.statusCode = 404
        }
    }

    return {
        props: {
            data
        }
    }
}

export default UserPage