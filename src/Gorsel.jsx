function Gorsel({gorsel}){


    return ( 
        <div>
            <img src={gorsel.download_url} alt="" style={{width:"150px", height:"150px"}}/>
            <h2>{gorsel.author}</h2>
        
        
        </div>


    )

}

export default Gorsel;