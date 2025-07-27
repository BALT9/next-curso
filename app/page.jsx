// "use client"

import User from "@/componentes/User";
import { Button } from "@/components/ui/button";


export const metadata = {
  title: 'Tienda HomePage',
  description: 'My Tienda by Next.js',
  keywords: "tienda, online, ecomerce",
}


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
            <Button>Click aqui..</Button>
        </>
    )
}

export default Homepage;