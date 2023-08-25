import loader from '../assets/loading.svg';
import {getImage,postImage,downloadImg} from './utils.js';
import { useNavigate } from 'react-router-dom';


function Form(props) {
    const navigate = useNavigate();

    const generateImg = async () => 
    {
        try{
            await props.isLoading.changeLoading(true);
            props.displayImg.changeDisplayImg(true);
            const url = await getImage(props.formPrompt)
            if (url !== null) 
            {
                props.imgUrl.changeImgUrl(url);
            }
            else
            {
                props.displayImg.changeDisplayImg(false);
            }
        }
        catch(err){
            props.displayImg.changeDisplayImg(false);
            alert(err);
        }
        finally{
            props.isLoading.changeLoading(false);
        }
    } 

    function postObj(){
        return {
            name:props.name,
            formPrompt:props.formPrompt,
            imgUrl:props.imgUrl.value
        }
    }
    
    return (
        <div className="card-body cardBg text-white">
            <form align="center">
                <label className='formText' >Name:</label>
                <br></br>
                <div align="center"><input type='text' className='inputNameCss form-control' value = {props.name} name="name" onChange={props.onChange}></input></div>
                <br></br>
                <br></br>
                <label className='formText' >Description:</label>
                <br></br>
                <div align="center"><textarea className="form-control inputDesCss" value = {props.formPrompt} name="formPrompt" onChange={props.onChange}></textarea></div>
                <br></br>
                <br></br>
                <button type="button" className="btn formBtnCss btn-lg" onClick={generateImg}>Generate</button>
            </form>
            <br></br>
            {props.displayImg.value  && <div align="center">
                <img src={props.isLoading.value ? loader : props.imgUrl.value} className="gImageCss" onClick={()=>props.expandImg()}></img>
                <br></br>
                <br></br>
                <div className="d-flex justify-content-center">
                    <div className="p-1"><button type="button" className="btn formBtnCss btn-lg"  onClick={()=>downloadImg(props.imgUrl.value)} disabled={props.isLoading.value}>Download</button></div>
                    <div className="p-1"><button type="button" className="btn formBtnCss btn-lg" onClick={()=>postImage(postObj(),navigate)} disabled={props.isLoading.value}>Share</button></div>
                </div>
            </div>}
        </div>
    )
}

export default Form;