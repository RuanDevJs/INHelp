import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Center, Container, Left, Right } from "./styles";
import { AccountCircle, Home, LocalPhone } from "@material-ui/icons";

import Button from "../../Components/Button";

export default function Header() {
    const Header = styled.header`
        padding: 15px;
        box-shadow: 1px 1px 16px rgba(0, 0, 0, 16%);
    `;

    return (
        <Header id="header">
            <Container>
                <Left>
                    <Link to="/">
                        <h1 className="fs-32 fw-900 c-dark">INHelp</h1>
                    </Link>
                </Left>
                <Center>
                    <Link to="/login" className="c-grey-primary fs-18 fw-300">
                        Login/Cadastrar
                    </Link>
                </Center>
                <Right>
                    <Button>Publicar Trabalho</Button>
                </Right>
            </Container>
        </Header>
    );
}
