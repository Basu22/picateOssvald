import { Link } from "react-router-dom"

export const Volver = ({nombre})=>{
    
    return(
        <Link to="/">
            <button>{nombre}</button>
        </Link>
    )
}