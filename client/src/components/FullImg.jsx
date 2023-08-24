import { useNavigate } from 'react-router';
import { postImage, downloadImg } from './utils';

function FullImg(props) {
    const navigate = useNavigate();
    function postObj(){
        return {
            name:props.name,
            formPrompt:props.formPrompt,
            imgUrl:props.imgUrl
        }
    }
    return (
        <div className="position-relative"><img className="card-img-top img-fluid imgCss" src={props.imgUrl} alt="" />
            <div className="d-flex justify-content-center p1">
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={()=>downloadImg(props.imgUrl)}>Download</button></div>
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={()=>postImage(postObj(),navigate)}>Share</button></div>
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={props.backToForm}>Back</button></div>
            </div>
        </div>
    );
}

export default FullImg;