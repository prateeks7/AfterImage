import PageHead from "../components/PageD/PageHead";
import PageD from "../components/PageD/PageD";
import Card from "../components/Card/Card";


function Home()
{
    return(
        <>
        <PageHead>Comunity Gallery</PageHead>
        <PageD>
            Welcome to After Image Comunity.
                    <br></br>
                    Join our creative space where the magic of artificial intelligence meets the world of captivating visuals. This community is a hub for all things imaginative and innovative, where you can explore, share, and collaborate on AI-generated images that push the boundaries of creativity.
                    <br></br>
                    <br></br>
                    Create Your Imagination And Share
        </PageD>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </>
    );
}

export default Home;