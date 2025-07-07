import styled from "styled-components";
import axios from "axios";

function NewPost(){
    const [form, setForm] = useState({ title: "",contents:""});

    const addPost=()=>{
        const postData=form;

        axios
        .post(`https://shopping-website-server.onrender.com/${what}`, postData)
        .then(() => {
        setForm({ title: "",contents:"" });
        })
        .catch((err) => {
        console.error(err);
        });
    }

    return(
        <>
        <Box>
            <Title value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} 
            placeholder="제목을 입력하세요."/>
            <Contents value={form.contents} onChange={(e)=>setForm({...form,contents:e.target.value})}
            placeholder="내용을 입력하세요."/>
            <Add onClick={()=>addPost}>추가</Add>
        </Box>
        </>
    )
}

const Box=styled.div`
    
`
const Title=styled.input`
    width: 800px;
`
const Contents=styled.input`
    width: 800px;
    height: 800px;
`
const Add=styled.button`
    background-color: yellow;
`

export default NewPost