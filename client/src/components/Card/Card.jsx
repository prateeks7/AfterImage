import './Card.css';
function Card()
{
    return(
        <div className='col-sm-6 col-md-6 col-xl-4 col-xxl-3 p-3'>
            <div className="card cardCss">
                <img className="card-img-top img-fluid imgCss" src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg" alt=""/>
                <div className="card-body cardBg text-white">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;