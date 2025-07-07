import styled from "styled-components"

function TodaySong(){
    return(
        <>
        <Card>
            오늘의 추천
        </Card>
        </>
    )
}

const Card=styled.div`
    display: flex;
    width: 800px;
    height: 200px;
`

export default TodaySong
