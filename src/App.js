import Pages from "./pages/Pages";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header>
      <h2>Boom Spicy Shop</h2>
      </Header>
      <Pages />
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
