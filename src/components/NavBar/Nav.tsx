import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { useRouteMatch, Link } from "react-router-dom";
import routes from '../../pages/routes';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
    border: none !important;
    .item {
        
        &:first-child {
            border-left: 0px !important;
        }
        &::before {
            display: none;
        }    
        &.active {
            box-shadow: 0px -2px 0px 0px #0085bb inset !important;
            background: none !important;
        }
    }   
`;

const Header = () => {

    const matchHome = useRouteMatch({
        path: "/",
        exact: true
    });

    const matchLogin = useRouteMatch({
        path: "/login"
    })
    
    return(
        <StyledMenu fixed="top" stackable>
            <Container>
                <Menu.Item 
                    as={Link}
                    name="HOME"
                    to={routes.HOME}
                    active={!!matchHome}
                >
                    Unravel
                </Menu.Item>
                <Menu.Item>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item>
                    <Icon name='file text outline' />
                    Products
                </Menu.Item>
                <Menu.Item>
                    <Icon name='content' />
                    Content
                </Menu.Item>
                <Menu.Item>
                    <Icon name='cart' />
                    Orders
                </Menu.Item>
                <Menu.Item>
                    <Icon name='chart line' />
                    Reporting
                </Menu.Item>
                <Menu.Item>
                    <Icon name='setting' />
                    Settings
                </Menu.Item>
                <Menu.Item>
                    <Icon name='user outline' />
                    Admin
                </Menu.Item>
                <Menu.Item 
                    as={Link}
                    name="LOGIN"
                    to={routes.LOGIN}
                    active={!!matchLogin}
                >
                    Login
                </Menu.Item>
            </Container>
        </StyledMenu>
    );
};

export default Header;