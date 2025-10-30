import { useEffect, useState } from "react";


const Bloges = () => {
    const [bloges,setBloges] = useState([]);
    useEffect(()=>{
        fetch( '/data.json')
        .then(res=>res.json())
        .then(data=>setBloges(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Bloges;