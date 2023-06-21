"use client"
import { useEffect, useState } from "react"
import styles from "@styles/Recipes.module.css"

export default function Recipes() {
    const API_URL = "http://localhost:3000/api/recipes/all_recipes";
    const [recipes, setRecipes] = useState([])

    const fetchRecipes = async () => {
        try {
            const data = await fetch(API_URL);
            const recipes = await data.json();
            console.log("Recipes: ", recipes)
            return recipes;
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchRecipes().then((recipes) => {
            setRecipes(recipes.recipes);
        });
    }, []); 

    return (
        <div className={styles.recipes}>
            <h2>Recipes </h2>
            {recipes.map((recipe) => {
                return <div key={recipe.id}>
                            <h4>{recipe.title}</h4>
                            <p>{recipe.content}</p>
                            <ul>{recipe.ingredients.map(() => {
                                const ingredients = recipe.ingredients

                                for (let i = 0; i < ingredients.length; ++i) {
                                    console.log("something")
                                }
                            })}</ul>
                        </div>
            })}
        </div>
    )
}