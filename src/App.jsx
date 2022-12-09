import { useEffect, useState } from "react";
import Kitap from "./Kitap";

function App()




{  
    const [veri, veriGuncelle]=useState(null);
    
    useEffect(()=>{ 
        const kitaplariCek=async ()=>{
     const response=await fetch("kitaplar.json");
     const kitaplar=await response.json();
     veriGuncelle(kitaplar)
     
   }
   kitaplariCek();
},[])
  
   


    return(<div> { veri && veri.data.map((kitap)=>{
       return <Kitap key={kitap.no} kitap={kitap}/>


    })}</div>)

}


export default App;