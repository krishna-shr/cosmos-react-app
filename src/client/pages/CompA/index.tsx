import useCompA from '@hooks/useCompA';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { Button, Title, Wrapper } from '@shared/styledComp';

export const CompA: FC = () => {
    const data = useCompA();
    const navigate = useNavigate();
    return data?.status?.toLowerCase() === 'ok' ? (
        <Wrapper>
            <Title>
                {data.msg}
            </Title>
            <Button onClick={() => navigate(-1)}>Back</Button>
        </Wrapper>
    ) : null
};

export default CompA;
