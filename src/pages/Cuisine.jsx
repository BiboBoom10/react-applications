import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();

        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

  return (
    <Grid
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
    >
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
`;

const Card = styled.div`
    padding: 0.5rem;    

    img {
        width: 100%;
        border-radius: 1rem;
    }
    a {
        text-decoration: none;
    }
    h5 {
        text-align: center;
        padding: 0.5rem;
    }
`;

export default Cuisine