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
    height: 200px;
    border-radius: 16px;
    background-color: white;
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
    font-size: 10px;
    font-weight: 400;
    color: gray;
`
const View=styled.p`
    font-size: 20px;
    font-weight: 600;
`

export default Postcard
