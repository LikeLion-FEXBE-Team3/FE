import GenreCard from "../components/GenreCard";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Grid>
        <GenreCard genre='DANCE' />
        <GenreCard genre='HIPHOP' />
        <GenreCard genre='BALLAD' />
        <GenreCard genre='자유 게시판' />
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 80vh;
  padding: 2rem;
  box-sizing: border-box;
  margin-top: 3%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  width: 80vw;
  height: 80vh;
`;
