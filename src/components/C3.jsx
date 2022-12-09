function C3(props)
{
    console.log("c3 çalıştı")
    return (
        <>
        <p>Ben C3  </p>
          {props.children}
    </>
    );

}

export default C3;