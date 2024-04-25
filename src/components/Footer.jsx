import fb from "../assets/rrss/fb.png"
import ig from "../assets/rrss/ig.png"
import yt from "../assets/rrss/yt.png"
import tw from "../assets/rrss/tw.png"

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light padding-custom">
            <div className="row py-4">
                <div className="col-md-9">
                    <p>Copyright © 2024 Leandro Roselli</p>
                    <p className="m-0">La creacion de este sitio web es meramente con fines de aprendizaje. No se espera ofender ninguna marca o persona. Proyecto final de ReactJS para CoderHouse.</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img src={fb} alt="Logo de Facebook" className="mx-2" width={24} />
                    <img src={ig} alt="Logo de Instagram" className="mx-2" width={24} />
                    <img src={yt} alt="Logo de Youtube" className="mx-2" width={24} />
                    <img src={tw} alt="Logo de Twitter" className="mx-2" width={24} />
                </div>
            </div>
        </div>
    )
}

export default Footer;