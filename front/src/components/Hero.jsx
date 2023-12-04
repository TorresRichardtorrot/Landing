function Hero() {
    return (
        <div className="hero__container">
            <div className="hero__text__info">
                <h1>
                    Gestiona tu inventario y ventas 120% mas rapido con <strong>IPUNTO</strong>
                </h1>
                <h3>
                    Esta comprobado que los negocios que utilizan estes tipos de 
                    servicio aumentan hasta un 120% el rendimiento de su negocio
                </h3>
                <div className="hero__btn__box">

                    <a className="hero__btn" href="#">Registrate Gratis</a>
                    <a className="hero__btn" href="#">Login</a>
                </div>
            </div>
            <div className="hero__image">
                <img draggable="false" src="src/assets/hero2.svg" alt="" />
            </div>
            <img draggable="false" className="hero__ola" src="/src/assets/vector4.svg" alt="" />
        </div>
    );
}

export default Hero;