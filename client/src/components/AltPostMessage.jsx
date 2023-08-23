import './styles/PageD.css';
import './styles/AltPostMessage.css';
import loader from '../assets/loading.svg';
function AltPostMessage(props)
{
    return(
        <div className='col-sm-12 col-md-12 col-xl-12 col-xxl-6 p-3 '>
            <div className="card cardCss d-flex justify-content-center altPostMessageCss">
                {   
                    props.type === "loading" ?
                    <img src={loader} className="altLoaderCss"></img>:
                    <p className="pageD">No Posts Yet</p>
                }
            </div>
        </div>
    )
}

export default AltPostMessage;