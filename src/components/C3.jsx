
import { memo } from 'react';

import './style.css'
function C3(props)
{
    console.log("c3 çalıştı")
    return (
        <>
        <p id='deneme'>Ben C3  </p>
          {props.children}
    </>
    );

}

export default memo(C3);