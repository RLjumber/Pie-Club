import { getAllPublishedPosts } from "@/dbFunctions/posts"

export default async function Handler(req, res) {
    if (req.method === "GET") {
        try {
            const posts = await getAllPublishedPosts();

            res.status(200).json({posts});

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    res.setHeader("Allow", "GET");
    res.status(425).end(`Method ${req.method} is not allowed!`)
}