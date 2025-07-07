import Genrecard from '../components/GenreCard';
import styled from 'styled-components';

const boxes = [
  { title: '댄스', to: '/artist' },
  { title: '랩/힙합',     to: '/genre' },
  { title: '발라드',     to: '/chart' },
  { title: '자유게시판',   to: '/recommend' },
];

export default function Home() {
  return (
    <>
    <GenreBox>
      <Genrecard genre="댄스"/>
      <Genrecard genre="힙합"/>
      <Genrecard genre="발라드"/>
      <Genrecard genre="자유"/>
    </GenreBox>

    </>
  );
}

const GenreBox=styled.div`
  
`
