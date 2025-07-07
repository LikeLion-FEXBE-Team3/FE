import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>Ono</Logo>
      <Nav>
        <NavItem><Link to="/about">자유게시판</Link></NavItem>
        <NavItem><Link to="/project">장르게시판</Link></NavItem>
        <NavItem><Link to="/diary">전국노래자랑</Link></NavItem>
       
      </Nav>
      <Logo></Logo>
      <Nav>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/project">Project</Link></NavItem>
        <NavItem><Link to="/diary">Diary</Link></NavItem>
      
      </Nav>


    </HeaderWrapper>
  );
}