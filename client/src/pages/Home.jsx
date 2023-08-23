import PageHead from "../components/PageHead";
import PageD from "../components/PageD";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import NoPost from "../components/NoPost";

const RenderCards = (data) => {
    if(data.length > 0) 
    {return data.map((item) => <Card prompt={item.prompt} name={item.name} imgUrl={item.photo}></Card>);}
    else
    {return <NoPost></NoPost>}
}

function Home()
{
    const [data, changeData] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            const response = await fetch('https://afterimage.onrender.com/api/v1/post',{
                method: 'GET',
            });
            const result = await response.json();
            changeData(result.data.reverse());
        }
        getData();
    },[]);

    return(
        <>
        <PageHead>Community Gallery</PageHead>
        <PageD>
            Welcome to After Image Community.
                    <br></br>
                    Join our creative space where the magic of artificial intelligence meets the world of captivating visuals. This community is a hub for all things imaginative and innovative, where you can explore, share, and collaborate on AI-generated images that push the boundaries of creativity.
                    <br></br>
                    <br></br>
                    Create Your Imagination And Share
        </PageD>
        {
            RenderCards(data)
        }
        </>
    );
}

export default Home;