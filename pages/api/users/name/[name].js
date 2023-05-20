import { getUserByName } from "@/dbFunctions/users";

export default async function handler(req, res) {
    if(req.method === "GET") {

        const { name } = req.query;

        try {
            const user = await getUserByName(name);
            res.status(200).json({user});
            console.log(`User ${name} retrieved!`);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    } else {
    res.status(425).end(`Method ${req.method} is not allowed!`)
    }
}