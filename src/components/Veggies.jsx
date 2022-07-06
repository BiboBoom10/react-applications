import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggies() {

  const [veggies, setVeggies] = useState([]);

    useEffect(() => {
        getVeggies();
    }, [])

    const getVeggies = async () => {

        const check = localStorage.getItem("veggies");

        if(check) {
            setVeggies(JSON.parse(check));
        }
        else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`);
        const data = await api.json();

        localStorage.setItem("veggies", JSON.stringify(data.recipes))
        setVeggies(data.recipes);
        console.log(data);
        }
    }

  return (
    <Wrapper>
      <h4>Vegeterian</h4>
    <Splide options={{
        // perPage: 4, 
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "1rem"
    }}>
    {veggies.map((recipe) => {
        return(
            <SplideSlide>
            <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src = {recipe.image} alt = {recipe.title} />
                <Gradient />
            </Card>
            </SplideSlide>
            );
        })}
        </Splide>
    </Wrapper>
  )

}

const Wrapper = styled.div`
    margin: 1rem;
`;

const Card = styled.div`
    position: relative;
    font-size: 0.8rem;
    

    img{
        height: 12rem;
        border-radius: 0.5rem;
    }
`;

const Gradient = styled.div`
    z-index: 5;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggies;