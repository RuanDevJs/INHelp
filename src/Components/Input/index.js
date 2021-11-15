import React from 'react'
import styled from 'styled-components'

export default function Input({...props}) {

    const Input = styled.input`
        width: 220px;
        padding: 10px 8px;
        outline: 0;
        border: 1px solid #f2f2f2;
    `;

    return (
        <Input className="fs-15 fw-500 c-dark" {...props}/>
    )
}
