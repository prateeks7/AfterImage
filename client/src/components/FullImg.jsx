import FileSaver from 'file-saver';
import { useNavigate } from 'react-router';
import { postImage } from './utils';

function FullImg(props) {
    const navigate = useNavigate();
    const downloadImg = () =>
    {
        FileSaver.saveAs(props.imgUrl,'AfterImage.png');
    }
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
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={downloadImg}>Download</button></div>
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={()=>postImage(postObj(),navigate)}>Share</button></div>
                <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={props.backToForm}>Back</button></div>
            </div>
        </div>
    );
}

export default FullImg;