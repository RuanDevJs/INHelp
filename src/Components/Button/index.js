import React from 'react';
import styled from 'styled-components';

export default function Button({children, as, onClick}) {
    const Button = styled.button`
        background-color: #2552D9;
        padding: 15px 20px;
        border: 0;
        outline: 0;
        width: 100%;
        border-radius: 4px;
        transition: 0.3s ease-out;
        letter-spacing: 1.1px;
        &:hover {
        transition: 0.3s ease-in;
        background-color: #2563D1;
        }
    `;

    return (
        <Button className="fs-18 fw-700 c-white" as={as} onClick={onClick}>
            {children}
        </Button>
    )
}
