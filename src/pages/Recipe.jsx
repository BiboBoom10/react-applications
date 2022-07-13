import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react';

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();

    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <Heading>
        <h5>{details.title}</h5>
        <img src={details.image} alt="" />
      </Heading>

      <Info>
        <Button className={ activeTab === "instructions"? "active" : "" } onClick={() => setActiveTab("instructions")} >Instructions</Button>
        <Button className={ activeTab === "ingredients"? "active" : "" } onClick={() => setActiveTab("ingredients")} >Ingredients</Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary}} ></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions}} ></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}

      </Info>

      </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h5 {
    margin-bottom: 1rem;
  }
 
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border 0.1rem solid #313131;
  margin: 0.5rem 0.2rem;
  border-radius: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;

  ul {
    margin-left: 1rem;
  }

  p, li {
    font-size: 0.9rem;
  }

`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  img{
    height: 12rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
  }

`;

export default Recipe;