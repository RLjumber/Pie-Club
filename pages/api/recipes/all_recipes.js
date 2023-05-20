import { getAllRecipes } from "@/dbFunctions/recipes";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const recipes = await getAllRecipes();

            res.status(200).json({recipes});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    } else {
        res.setHeader("Allow", "GET");
        res.status(425).end(`Method ${req.method} is not allowed!`)
    }
};
