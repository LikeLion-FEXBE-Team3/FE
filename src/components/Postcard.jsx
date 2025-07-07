import styled from "styled-components";

function Postcard({img,title,contents,viewpoint}){

    return(
        <>
        <Card>
            <Img src=""/>
            <Text>
                <Title>
                    {title}
                </Title>
                <Contents>
                    {contents}
                </Contents>
            </Text>
            <View>
                {viewpoint}
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
`
const Img=styled.img`
    
`
const Text=styled.div`
    
`
const Title=styled.p`
    
`
const Contents=styled.p`
    
`
const View=styled.p`
    
`

export default Postcard
