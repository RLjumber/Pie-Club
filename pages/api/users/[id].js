import { getUserById } from "@/dbFunctions/users";

export default async function handler(req, res) {
    if(req.method === "GET") {

        const { id } = req.query;

        try {
            const user = await getUserById(id);
            res.status(200).json({user});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
    res.setHeader("Allow", "GET");
    res.status(425).end(`Method ${req.method} is not allowed!`)
}