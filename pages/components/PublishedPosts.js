"use client"

import { useState, useEffect } from "react";
import styles from '@styles/PublishedPosts.module.css';



export default function PublishedPosts() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        console.log("window location: ", window.location)
        fetchPublishedPosts().then((data) => {
            setPosts(data.posts);
            console.log(posts);
        });
    }, []);

    const fetchPublishedPosts = async () => {
        try {
            // window is only accessible client side so must be called here on the client side, during the useEffect call
            const origin = window.location.origin
            const API_URL = `${origin}/api/posts/all_published_posts`;

            const response = await fetch(API_URL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching published posts: ", error)
            setPosts([]);
        }
    }

    console.log("published posts: ", posts)

    return (
        <div className={styles.publishedPosts}>
            <h2>Posts: </h2>
            {posts.map((post) => {
                return <div key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
            })}
        </div>
    )
};