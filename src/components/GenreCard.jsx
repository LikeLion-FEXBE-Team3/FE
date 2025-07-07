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
    width: 200px;
    height: 100px;
    border-radius: 16px;
    font-weight: 700;
    color: white;
    background-color: black;
`

export default GenreCard
