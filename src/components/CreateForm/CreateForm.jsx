import './CreateForm.css';
function CreateForm()
{
    return(
        <div className='col-sm-12 col-md-12 col-xl-12 col-xxl-6 p-3' >
            <div className="card cardCss" >
                <div className="card-body cardBg text-white">
                    <form align="center">
                        <label className='formText'>Name:</label>
                        <br></br>
                        <input type='text' className='inputNameCss'></input>
                        <br></br>
                        <br></br>
                        <label className='formText' >Description:</label>
                        <br></br>
                        <textarea  rows="1" cols="50"></textarea>
                        <br></br>
                        <br></br>
                        <button type="button" className="btn formBtnCss btn-lg">Generate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateForm;