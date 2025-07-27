import PostCard from "@/componentes/PostCard";

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}

async function PostPage() {

    const posts = await loadPosts()
    console.log(posts);

    return (
        <>
            <h1>posts</h1>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </>
    )
}

export default PostPage;