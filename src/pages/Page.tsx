import React from "react";
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Header from '../components/NavBar/Nav';

const StyledContainer = styled(Container)`
    padding-top: 5em;
    padding-bottom: 5em;
`;


const Page = ({ children }: any) => {

    return (
        <React.Fragment>
            <Header />
            <StyledContainer>{children}</StyledContainer>
        </React.Fragment>
    );
};

export default Page;