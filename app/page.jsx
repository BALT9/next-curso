// "use client"

export const metadata = {
  title: 'Tienda HomePage',
  description: 'My Tienda by Next.js',
  keywords: "tienda, online, ecomerce",
}

import User from "@/components/User";
// import { useState } from "react";

// componente servidor 
function Homepage(){
    // const [Count,setCount] = useState(0);

    return(
        <>
            <h1>HomePage hello word</h1>
            {/* <button onClick={()=>{setCount(Count+1)}}>Click: {Count}</button> */}
            {/* user tiene "use client" por que lo obtiene de Homepage pero tambien puede ser al revez */}
            <User />
        </>
    )
}

export default Homepage;