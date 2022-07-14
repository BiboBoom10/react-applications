import Pages from "./pages/Pages";
import styled from "styled-components";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Stuck>
          <Header>
            <GiKnifeFork />
            <Logo to={"/"}>Boom Spicy Shop</Logo>
          </Header>
        </Stuck>

        <Content>
          <Search />
          <Category />
          <Pages />
        </Content>
      </BrowserRouter>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 3rem;
  background-color: black;

  svg {
    font-size: 2rem;
  }
`;

const Stuck = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const Content = styled.div`
  margin-top: 4rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: white;
`;

export default App;
