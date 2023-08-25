import FormField from "../components/FormField";
import PageD from "../components/PageD";
import PageHead from "../components/PageHead";

function Create()
{
    return(
        <>
            <PageHead>Create</PageHead>
            <PageD>
                Welcome to the Create section.
                    <br></br>
                    Simply close your eyes, let your imagination run wild, and describe the image you envision. Whether it's a mystical creature, an alien landscape, a futuristic cityscape, or anything your heart desires. Share with the community if you desire.
                    <br></br>
                    <br></br>
                    Thanks to <span style={{color: "#E6007E"}}>johnsleger's epic-diffusion-v1.1</span> AI Model
                    <br></br>
                    Your Imagination Is The Only Limit!
            </PageD>
            <FormField></FormField>
        </>
    );
}

export default Create;