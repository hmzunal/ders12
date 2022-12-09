import { useEffect } from "react";

function C1(){

        useEffect(()=>
                {
                    console.log("C1 useEffect Çalıştı");
                    return ()=>  //cleanup function  (unmount olduğu zaman çalışır)
                    {
                        console.log("c1 tarayıcıdan kalktı")
                        let resim=document.createElement("img")
                        resim.src="https://picsum.photos/200/300"
                        document.body.append(resim)
                    }
                })

    return(
        <>
            <p>Ben C1</p>

        </>

    );
}

export default C1;