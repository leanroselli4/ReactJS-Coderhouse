import Logo from "./Logo";

const AboutUs = () => {
    return (
        <div className="container-fluid bg-dark padding-custom">
            <div className="row py-5">
                <div className="col-md-9 text-justify text-light">
                    <h2 className="font-bk">Burger Fake King</h2>
                    <p className="font-text m-0 pb-4">
                        ...es una tienda basada en la tienda oficial de BK, creada solo para fines educativos.
                    </p>
                    <p className="font-text">
                        Poco a poco iremos completando nuestro catálogo y pareciendonos aun mas a la tienda oficial.
                    </p>
                </div>
                
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <Logo tamanio={192} />
                </div>
            </div>
            <hr className="text-light m-0 p-0" />
        </div>
    )
}

export default AboutUs;