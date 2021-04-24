import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(){
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                </Menu.Item>
                <Menu name="Events"/>
                <Menu.Item>
                    <Button positive inverted content='Content Event'/> 
                </Menu.Item>
                <Menu.Item>
                    <Button basic inverted content="Login"/>
                    <Button basic inverted content="Login"/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}