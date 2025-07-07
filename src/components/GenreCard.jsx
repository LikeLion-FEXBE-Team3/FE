import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import danceImg from "../assets/images/dance.jpg";
import hiphopImg from "../assets/images/hiphop.jpg";
import balladImg from "../assets/images/ballad.jpg";
import freeImg from "../assets/images/free.jpg";

const genreImageMap = {
  DANCE: danceImg,
  HIPHOP: hiphopImg,
  BALLAD: balladImg,
  "자유 게시판": freeImg,
};

function GenreCard({ genre }) {
  const navigate = useNavigate();
  const bg = genreImageMap[genre];

  return (
    <Card $bg={bg} onClick={() => navigate(`/post?genre=${genre}`)}>
      <Label>{genre}</Label>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.85);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({ $bg }) => `url(${$bg})`};
    background-size: cover;
    background-position: center;
    filter: blur(6px) brightness(0.55);
    transform: scale(1.1);
  }

  &:hover::before {
    filter: blur(4px) brightness(0.75);
    transition: 0.2s ease;
  }
`;

const Label = styled.span`
  position: relative;
  z-index: 1;
`;

export default GenreCard;
