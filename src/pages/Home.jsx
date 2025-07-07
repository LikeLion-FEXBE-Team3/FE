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
    <Entire>
    <GenreBox>
      <Gbox>
      <Genrecard genre="댄스"/>
      <Genrecard genre="힙합"/>
      </Gbox>
      <Gbox>
      <Genrecard genre="발라드"/>
      <Genrecard genre="자유"/>
      </Gbox>
    </GenreBox>

    </Entire>
  );
}

const Entire=styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  justify-content: center;
  align-items: center;
`

const GenreBox=styled.div`
  display: flex;
  gap: 50px;
`

const Gbox=styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
`
