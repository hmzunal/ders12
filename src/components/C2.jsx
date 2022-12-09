import { memo } from "react";

function C2()

{
    console.log("c2 çalıştı")
    return ( 
         <>
                <p>Ben C2</p>
    
         </>
             );

}
//memo değişmeyen komponentin tekrar çalışmamasını sağlar ve bu sayede daha hızlı işlem yapılır
export default memo(C2);