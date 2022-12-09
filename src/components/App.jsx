import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import { useState } from "react";

function App()
{   
    const [durum,durumDegistir]=useState(false);
    console.log("deneme")
    return (
        <>
          
            <C1 isim="melis" soyisim="blA BLA"/>
            <C2 isim="deniz"/>
            <C3 isim="maniz">
                <h2>C4 Child Component</h2>
                <C4 isim="beyza"/>
                    
            </C3>
           
        </>


    );

}

export default App;