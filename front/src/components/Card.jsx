
function Card({data}) {
    return (
        <article className="about__card">
            <div className="about__card__img">
                {console.log(data)}
                <img draggable="false" src={data.image} alt="" />
            </div>
                <h4>{data.title}</h4>
            <p>
                {data.info}
            </p>
        </article>
    );
}

export default Card;