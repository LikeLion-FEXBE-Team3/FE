import styled from "styled-components";

function Postcard({title,contents,viewpoint}){

    return(
        <>
        <Card>
            <Text>
                <Title>
                    {title}
                </Title>
                <Contents>
                    {contents}
                </Contents>
            </Text>
            <View>
                조회수: {viewpoint}
            </View>
        </Card>
        </>
    )
}

const Card=styled.div`
    display: flex;
    width: 800px;
    height: 100px;
    border-radius: 16px;
    background-color: white;
    justify-content: space-between;
    background-color: beige;
    padding: 10px;
    line-height: 15px;
`
const Text=styled.div`
    display: flex;
    flex-direction: column;
`
const Title=styled.p`
    font-size: 20px;
    font-weight: 600;
`
const Contents=styled.p`
    font-size: 15px;
    font-weight: 400;
    color: gray;
`
const View=styled.p`
    font-size: 20px;
    font-weight: 600;
`

export default Postcard
