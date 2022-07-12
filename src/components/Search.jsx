import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/` + input);
  }

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <input onChange={(e) => {setInput(e.target.value)}} type="text" value={input} />
      <FaSearch />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0.5rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    color: white;
    outline: none;
  }

  svg {
    position: absolute;
    top: 30%;
    transform: translate(6rem);
    color: white;
  }
`;

export default Search;
