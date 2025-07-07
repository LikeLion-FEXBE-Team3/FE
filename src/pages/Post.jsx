import styled from "styled-components";
import Postcard from "../components/Postcard"
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Post({what}){
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const options=["기본","조회수 높은순","조회수 낮은순"]; //분류 기준
    const [open,setOpen]=useState(false); //토글 열림,닫힘 변수
    const [select,setSelect]=useState("기본"); //분류 기준 변수

    const getPost=()=>{
        axios
            .get(`http://54.180.89.73:8080/api/posts`)
            .then((response) => {
            setPost(response.data?.data);
            })
            .catch((err) => {
            console.error(err);
            })  
    }

    useEffect(() => {
        getPost();
    }, []);

    function Drop(){ //버튼 클릭하면 현재 상태에 not해서 반대 상태로
      setOpen(!open);
    }

    function NowOption(value){ //기준 선택하면 기준 바뀌면서 토글 닫기
      setSelect(value);
      setOpen(!open);
    }

    const newPost = () => {
        navigate('/newPost');  // 이동할 경로 지정
    };
    const onePost = () => {
        navigate('/onePost');  // 이동할 경로 지정
    };

    let sortingPost=post;  //데이터 정렬해서 담을 변수
    if(select !=="기본"){ //기준이 기본이 아니면 실행
        sortingPost=[...post].sort((a,b)=>{ //sort함수는 결과가 양수면 b,a순이고 음수면 a,b순으로 정렬
        return select==="조회수 높은순" ? b.views - a.views : a.views - b.views  
        }); //높은 가격순이면 b-a를 반환->양수면(b가 a보다 크면) b,a -> 내림차순 정렬
    }

    console.log(post)

    return(
        <Entire>
        <NavBar>
        <NewPost onClick={newPost}>
            게시물 등록
        </NewPost>
        <DropBox>
            <DropButton onClick={Drop}>정렬 기준: {select} {open ? "∧":"∨"}</DropButton>
            {open && (
                <OptionBox>
                {options.map(option=>(
                    <Option key={option} onClick={()=>NowOption(option)} now={select==option ? 1:0}>
                        {option}
                    </Option>
                ))}
                </OptionBox>
            )}
        </DropBox>
        </NavBar>
        <PostBox>
            {sortingPost.map(p=>(
                <Postcard 
                title={p.title}
                contents={p.description}
                viewpoint={p.views}
                onClick={onePost}/>
            ))}
        </PostBox>
        </Entire>
    )
}
const Entire=styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin-top: 20px;
    gap: 10px;
`

const NavBar=styled.div`
    display: flex;
    justify-content: space-between;
`
const NewPost=styled.button`
    background-color: yellowgreen;
    border-radius: 16px;
    border: none;
`
const PostBox=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const DropBox=styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 50px;
  flex-direction: column;
`
const DropButton=styled.button`
    display: flex;
    border: none;
    font-family: Pretendard;
    font-weight: 400;
    background-color: white;
    cursor: pointer;
    justify-content: flex-end;

    &:focus{
        outline: none;
    }
`
const OptionBox=styled.ul`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    text-align: right;
    padding: 20px;
    padding-left: 0;
    font-family: Pretendard;
    width: 100px;
    margin-left: auto;
`

const Option=styled.li`
  list-style: none;
  justify-content: center;
  color: ${(props)=> ((props.now) ? "#c1bebe":"black")};
  cursor: ${(props)=> ((props.now) ? "not-allowed": "pointer")};

  &:hover{
    color: #6e6d6d;
  }
`

export default Post