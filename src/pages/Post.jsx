import styled from "styled-components";
import Postcard from "../components/Postcard"
import axios from "axios";
import { useState, useEffect } from "react";

function Post({what}){
    const [post, setPost] = useState([]);

    const getPost=()=>{
        axios
            .get(`https://shopping-website-server.onrender.com/${what}`)
            .then((response) => {
            setPost(Array.isArray(response.data) ? response.data : []);
            })
            .catch((err) => {
            console.error(err);
            })  
    }

    useEffect(() => {
        getPost();
    }, []);


    return(
        <>
        <PostBox>
            {post.map(p=>(
                <Postcard 
                img={p.img}
                title={p.title}
                contents={p.contents}
                viewpoint={p.viewpoint}/>
            ))}
        </PostBox>
        </>
    )
}

const PostBox=styled.div`
    
`

export default Post