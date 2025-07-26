// app/posts/[id]/page.jsx
async function loadPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    // console.log(data)
    return data;
}

export default async function Page({ params }) {
    const resolvedParams = await params; // 👈 obligatorio
    const id = resolvedParams.id;
    
    // console.log(resolvedParams)
    // console.log("id: "+id)
    // await loadPosts(id)

    const post = await loadPosts(id);

    return (
        <>
            {/* <h1>page: {id}</h1> */}
            <h1 className="font-bold" >{post.id}. {post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}
