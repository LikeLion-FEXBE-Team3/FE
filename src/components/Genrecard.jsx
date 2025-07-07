import styled from "styled-components";

function Genrecard({genre}){

    const otherGenre=()=>{

    }

    return(
        <>
        <Card>
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
`

export default Genrecard