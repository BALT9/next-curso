"use client"

function PostCard({ post }) {
    return (
        <>
            <h1>PostCard</h1>
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <button onClick={() => { alert("contactando...") }}>Contactar</button>
            </div>
        </>
    )
}

export default PostCard;