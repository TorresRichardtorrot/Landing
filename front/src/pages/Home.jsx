import Card from "../components/Card"
import Header from "../components/header.jsx"
import Hero from "../components/Hero"
import  {datas}  from "./datas.js"
function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            
            <section className="section__about__container">
                
                <h2>¿Que ofrece<strong>IPUNTO</strong>?</h2>

                <div className="about__card__container">
                    
                    {datas.map((data,index) => (
                         <Card key={index} data={data}/>
                    ) 
                    )}
                    
                    
                </div>
                <div className="about__card__btn">
                    <a className="about__btn" href="#">Pruebalo ahora</a>
                </div>
                
            </section>

            <section className="section__info__container">
                        <img className="info__vector3" draggable="false" src="/src/assets/finance3.svg" />  
                        <img className="info__vector1" draggable="false" src="/src/assets/vector2.svg" />
                        <img className="info__vector2" draggable="false" src="/src/assets/vector2.svg" />

                        <div className="info__box">
                                <article className="info_card">
                                    <div>
                                            <h2>¿Que es <strong>Ipunto</strong>?</h2>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic enim ad asperiores incidunt sunt culpa alias cumque iure, laboriosam animi velit tempore at ullam numquam quibusdam minus recusandae beatae quaerat?
                                        </p>
                                    </div>
                                <div className="info__card--img">
                                    <img src="/src/assets/hero.png" loading="lazy"/>
                                </div>
                                </article>
                                <article className="info_card reverse">
                                    <div>
                                            <h2>¿Que es <strong>Ipunto</strong>?</h2>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic enim ad asperiores incidunt sunt culpa alias cumque iure, laboriosam animi velit tempore at ullam numquam quibusdam minus recusandae beatae quaerat?
                                        </p>
                                    </div>
                                    <div className="info__card--img">
                                        <img src="/src/assets/hero.png" loading="lazy"/>
                                    </div>
                                </article>
                    
                        </div>
            </section>
        </>
    );
}

export default Home;