import { Close } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Modal({active, onClick}) {
    const Container = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 16%);
        display: ${active ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        svg {
            background: #2552D9;
            padding: 10px;
            border-radius: 50px;
            display: block;
            margin: 30px auto;
            text-align: center;
            cursor: pointer;
            transition: .3s ease-out;
        }

        svg:hover{
            transition: .3s ease-in;
            background: #2563D1;
            color: #f2f2f2;
        }
    `;

    const Modal = styled.div`
        z-index: 10000;
        width: 475px;
        height: 220px;
        padding: 20px;
        border-radius: 12px;
        background: #ffffff;
    `;

    const Title = styled.h2`
        text-align: center;
        padding: 10px 0;
    `;

    const Subtitle = styled.span`
        display: block;
        width: 368px;
        text-align: left;
        line-height: 1.5em;
        margin: 0 auto;
    `;

    return (
        <Container>
            <Modal>
                <Title className="fs-32 fw-900 c-blue">Sucesso!</Title>
                <Subtitle className="fs-18 fw-300 c-grey-primary">
                    Um e-mail foi enviado para o contratante, fique de olho no
                    seu e-mail, uma resposta será enviada do contratante.
                </Subtitle>
                <Close htmlColor="#ffffff" onClick={onClick}/>
            </Modal>
        </Container>
    );
}

export default Modal;
