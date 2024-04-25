import slide1 from "../assets/carousel/slide1.jpeg"
import slide2 from "../assets/carousel/slide2.jpeg"
import slide3 from "../assets/carousel/slide3.jpeg"

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide border-top border-bottom">
            <div className="carousel-indicators bg-indicators m-0">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="Grand Tasty"/>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="Aguas Frutadas"/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="MMcFlurry"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;