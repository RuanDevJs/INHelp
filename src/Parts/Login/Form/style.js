import styled from "styled-components";

export const Container = styled.div`
    max-width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Left = styled.div`
    max-width: 50%;
    background: #f9f9f9;
    padding: 5px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    padding: 50px;
    width: 30%;
    box-shadow: 6px 6px 16px rgba(0,0,0,16%);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    button {
        margin: 15px 0;
        width: 220px;
    }
`;

export const Title = styled.h2`
    padding: 10px 0;
`;

export const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
`;

export const Select = styled.p`
    margin-right: 10px;
`;

export const WrapForm = styled.div`
    margin: 15px 0;

    button {
        margin: 5px 0;
        width: 160px;
    }
`;
export const Label = styled.span`
    display: block;
    margin: 5px 0;
`;

