import CreateForm from "../components/CreateForm/CreateForm";
import PageD from "../components/PageD/PageD";
import PageHead from "../components/PageD/PageHead";

function Create()
{
    return(
        <>
            <PageHead>Create</PageHead>
            <PageD>
                Welcome to the Create section.
                    <br></br>
                    Simply close your eyes, let your imagination run wild, and describe the image you envision. Whether it's a mystical creature, an alien landscape, a futuristic cityscape, or anything your heart desires. Share with the comunity if you desire.
                    <br></br>
                    <br></br>
                    Your Imagination Is The Only Limit!
            </PageD>
            <CreateForm></CreateForm>
        </>
    );
}

export default Create;