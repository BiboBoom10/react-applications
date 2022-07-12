import Pages from "./pages/Pages";
import styled from "styled-components";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
        <h2>Boom Spicy Shop</h2>
        </Header>
        <Search />
        <Category />
        <Pages />
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

export default App;
