import { useState } from 'react';
import './styles/FormField.css';
import FullImg from './FullImg';
import Form from './Form';
import loader from '../assets/loading.svg';


function FormField() {
    const [fullImg, changeImgSize] = useState(false);
    const [isLoading,changeLoading] = useState(false);
    const [displayImg,changeDisplayImg] = useState(false);
    const [imgUrl, changeImgUrl] = useState(loader);
    const [form, setForm] = useState({
        name:"",
        formPrompt:"",
    });

    const handleChange = (e) => 
    {
        setForm({...form,[e.target.name]:e.target.value});
    }



    return (
        <div className='col-sm-12 col-md-12 col-xl-12 col-xxl-6 p-3' >
            <div className="card cardCss" >
                {fullImg && imgUrl !=null ?
                    <FullImg backToForm={()=>changeImgSize(false)} imgUrl={imgUrl} name={form.name} formPrompt={form.formPrompt}></FullImg>
                    :
                    <Form 
                    name={form.name}
                    formPrompt={form.formPrompt}
                    imgUrl={{value:imgUrl,changeImgUrl}}
                    isLoading={{value:isLoading,changeLoading}}
                    displayImg={{value:displayImg,changeDisplayImg}}
                    onChange={handleChange}
                    expandImg={()=>{
                        changeImgSize(true);
                    }}></Form>

                }
            </div>
        </div>
    )
}

export default FormField;