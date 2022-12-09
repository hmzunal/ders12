import { useEffect, useState } from "react";
import Gorsel from "./Gorsel";
function App(){
    const [gorseller,gorselGuncel]=useState(null);


    useEffect(
        ()=>{

            (async ()=>{
                const response= await fetch("https://picsum.photos/v2/list")
                const veri=await response.json();

                gorselGuncel(veri)


            })()


        },[]


    )

    return(
            <>
             {gorseller &&  gorseller.map(eleman=> <Gorsel key={eleman.id} gorsel={eleman}></Gorsel>)}
            
            
            </>

    );
}

export default App;