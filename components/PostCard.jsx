"use client"
import Link from "next/link";

function PostCard({ post }) {
    return (
        <>
            <h1>PostCard</h1>
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                {/* <button onClick={() => { alert("contactando...") }}>Contactar</button> */}
                <Link href={`/posts/${post.id}`}>Ver...</Link>
            </div>
        </>
    )
}

export default PostCard;