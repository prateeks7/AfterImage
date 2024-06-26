import logo from '../assets/loading.svg'
import FileSaver from 'file-saver';
const getImage = async (formPrompt) => {
    if (formPrompt !== "") {
        {
            try {
                const response = await fetch('https://afterimage.onrender.com/api/v1/ai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt: formPrompt })
                });
                const data = await response.json();
                return data;

            }
            catch (err) {
                throw err;
            }
        }
    }
    else {
        throw "Please enter the description";
    }
}
const postImage = async ({name,formPrompt,imgUrl},navigate) => {
    
    if (name !== "" && formPrompt !== "" && imgUrl !== logo) {
        try {
            const response = await fetch('https://afterimage.onrender.com/api/v1/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, prompt: formPrompt, photo: imgUrl })
            })
            await response.json();
            navigate('/AfterImage/');
        }
        catch (err) {
            alert(err);
        }
    }
    else {
        alert("Please enter the name and description");
    }
}

const downloadImg = (img) =>
{
    FileSaver.saveAs(img,'AfterImage.png');
} 

export {getImage,postImage,downloadImg};