"use client"

// componente cliente 
function User() {
    return (
        <>
            <h1>Users</h1>
            <button onClick={()=>{alert('loader')}}>Cargar</button>
        </>
    )
}
export default User;