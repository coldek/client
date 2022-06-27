import { NextApiRequest, NextApiResponse } from "next";
import { server } from "../../../helpers/config";
import { getData } from "../../../helpers/getData";

export default async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'Not Found' })
    }

    try {
        const data = await getData({
            url: `${server}/account/login`,
            method: 'post',
            body: {
                username: req.body?.username,
                password: req.body?.password
            }
        })
        res.status(200).json({ ...data })
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: 'Error' })
    }
}