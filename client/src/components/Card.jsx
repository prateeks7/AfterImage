import './styles/Card.css';
function Card(props)
{
    return(
        <div className='col-sm-6 col-md-6 col-xl-4 col-xxl-3 p-3'>
            <div className="card cardCss">
                <img className="card-img-top img-fluid imgCss" src={props.imgUrl} alt=""/>
                <div className="card-body cardBg text-white">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.prompt}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;