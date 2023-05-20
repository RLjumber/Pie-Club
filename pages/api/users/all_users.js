// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllUsers } from "@/dbFunctions/users";

export default async function handler(req, res) {

  if (req.method === "GET") {
    try {
      const  users  = await getAllUsers();

      // for some reason specifying const { users, error } in the above line gave me issues, no longer returning lien below
      // if (error) throw new Error(error);
        console.log("Users from api: ", users)
        return res.status(200).json({users});
      
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(425).end(`Method ${req.method} is not allowed!`)
}
};

