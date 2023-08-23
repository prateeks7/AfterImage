import './styles/PageD.css';
import loader from '../assets/loading.svg';
function AltPostMessage(props)
{
    return(
        <div className='col-sm-6 col-md-6 col-xl-4 col-xxl-6 p-3'>
            <div className="card cardCss">
                {   
                    props.type === "loading" ?
                    <p className="pageD">No Posts Yet</p> :
                    <img src={loader} className="gImageCss"></img>
                }
            </div>
        </div>
    )
}

export default AltPostMessage;