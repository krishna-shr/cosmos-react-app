import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Wrapper } from '@shared/styledComp';

export const Home: FC = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Title>
                Welcome to Meesho React App Boiler plate.
            </Title>
            <Button onClick={() => navigate('/a')}>Show Comp A</Button>
        </Wrapper>
    )
};

export default Home;
