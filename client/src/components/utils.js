import logo from '../assets/loading.svg'
import FileSaver from 'file-saver';
const getImage = async (formPrompt) => {
    const errorImg = "eyJlcnJvciI6Ik1vZGVsIGpvaG5zbGVnZXJzL2VwaWMtZGlmZnVzaW9uLXYxLjEgaXMgY3VycmVudGx5IGxvYWRpbmciLCJlc3RpbWF0ZWRfdGltZSI6MjAuMH0=";
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
                if(data !== errorImg)
                return data;
                else
                throw "Please enter some more details in the description";

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