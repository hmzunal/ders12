import { useEffect, useState } from "react";
import C1 from "./C1";
function App(){
    
    const [acKapa,acKapaDurum]=useState(false)
    const [isim,setIsım]=useState(true)
    
    console.log("çalıştı")
    useEffect(()=>
    {
        //bu kodlar render tamamen bittikten sonra çalışacaktır
    
            let saniye=new Date().getSeconds()
            document.body.style.backgroundColor= saniye%2=== 0 ? "blue" :"yellow"
            
      
    },[acKapa]);


    return(
            <>  
           
                App render edildi..{new Date().getSeconds()}
                {acKapa && <C1/>}
            
            </>

        
    )


}

export default App;