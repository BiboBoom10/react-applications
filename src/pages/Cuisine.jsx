import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Links, useParams } from 'react-router-dom';

function Cuisine() {

    const getCuisine = async (name) => {
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipies = await data.json();
    }

  return (
    <div>Cuisine</div>
  )
}

export default Cuisine