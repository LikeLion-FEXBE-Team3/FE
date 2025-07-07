import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function GenreCard({genre}){
    const navigate = useNavigate();

    const otherGenre=()=>{
        navigate('/post');
    }

    return(
        <>
        <Card onClick={otherGenre}>
            {genre}
        </Card>
        </>
    )
}

const Card=styled.div`
    display: flex;
    width: 400px;
    height: 200px;
    border-radius: 16px;
    font-weight: 700;
    color: white;
    background-color: black;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, blue, skyblue);

`

export default GenreCard
