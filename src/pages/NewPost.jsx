import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


function NewPost(){
    const [form, setForm] = useState({
  title: '',
  description: '',
  writer: '',
  genre: '',
  imageUrl: '',
});

    const addPost=()=>{
        const postData=form;

        axios
        .post(`http://54.180.89.73:8080/api/posts`, postData)
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
            <Contents value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})}
            placeholder="내용을 입력하세요."/>
            <Contents value={form.writer} onChange={(e)=>setForm({...form,writer:e.target.value})}
            placeholder="장르를 입력하세요."/>
            <Contents value={form.genre} onChange={(e)=>setForm({...form,genre:e.target.value})}
            placeholder="가수를 입력하세요."/>
            <Add onClick={addPost}>추가</Add>
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
    height: 400px;
`
const Add=styled.button`
    background-color: yellow;
`

export default NewPost