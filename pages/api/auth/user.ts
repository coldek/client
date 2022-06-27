import { NextApiRequest, NextApiResponse } from "next"
import jwt, { Secret } from 'jsonwebtoken'
import { jwtPub, server } from "../../../helpers/config"
import { getData } from "../../../helpers/getData"
import { getTokenFromHeader } from "../../../helpers/AuthContext"

export type User = {
    id: number
    username: string
    avatar: Avatar
}

export type Avatar = {
    cache: string
}

export default async function userRoute(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.headers.authorization === undefined) throw new Error()

        const token = getTokenFromHeader(req.headers.authorization)

        jwt.verify(token, jwtPub, {
            algorithms: ['RS256']
        })

        const data = await getData({
            url: `${server}/account/user`,
            method: `get`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        res.status(200).json(data)
    } catch (e) {
        res.status(401).json({ message: 'Bad Request' })
    }
}