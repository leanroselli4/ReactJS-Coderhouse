import { Link } from "react-router-dom";
import LogoBK from "../assets/bk-logo.png";

const Logo = ({tamanio}) => {
    return (
        <Link to={"/"}>
            <img src={LogoBK} alt="Logo de BK" className="logo" width={tamanio} />
        </Link>
    )
}

export default Logo;