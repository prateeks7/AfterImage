import logo from '../assets/logo.png'
const getImage = async (formPrompt) => {
    console.log(formPrompt);
    if (formPrompt != "") {
        {
            try {
                const response = await fetch('http://localhost:1000/api/v1/ai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt: formPrompt })
                });
                const data = JSON.parse(await response.json());
                console.log(data);
                return data.output[0];
            }
            catch (err) {
                alert(err);
            }
        }
    }
    else {
        alert("Please enter the description");
        return null;
    }
}
const postImage = async ({name,formPrompt,imgUrl},navigate) => {
    
    if (name != "" && formPrompt != "" && imgUrl != logo) {
        console.log("TryPost");
        try {
            const response = await fetch('http://localhost:1000/api/v1/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, prompt: formPrompt, photo: imgUrl })
            })
            await response.json();
            navigate('/');
        }
        catch (err) {
            alert(err);
        }
    }
    else {
        alert("Please enter the name and description");
    }
}

export {getImage,postImage};