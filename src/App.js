import Pages from "./pages/Pages";
import styled from "styled-components";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Stuck>
          <Header>
          <h2>Boom Spicy Shop</h2>
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

export default App;
