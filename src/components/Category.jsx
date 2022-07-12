import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to = {'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h5>Italian</h5>
        </SLink>
        <SLink to = {'/cuisine/American'}>
            <FaHamburger/>
            <h5>American</h5>
        </SLink>
        <SLink to = {'/cuisine/Thai'}>
            <GiNoodles/>
            <h5>Thai</h5>
        </SLink>
        <SLink to = {'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h5>Japanese</h5>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    padding: 0.2rem 1rem;
    margin: 0.3rem;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 50%;
    height: 3rem;
    width: 3rem;

    svg {
        height: 0.9rem;
        color: white;
    }
    h5 {
        font-size: 0.6rem;
        color: white;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            height: 0.9rem;
            color: white;
        }
        h5 {
            font-size: 0.6rem;
            color: white;
        }
    }
`;

export default Category