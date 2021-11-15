import styled from "styled-components";

export const Container = styled.section`
    max-width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    transition: 0.3s ease-out;

    button {
        width: 220px;
    }

    @media (max-width: 728px){
        & {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0;
        }
    }
`;

export const Wrap = styled.div`
    flex: 1 1 40%;
    padding: 24px 45px;
    background: #f9f9f9;
    border-left: 3px solid #2552D9;
    border-radius: 4px;
    box-shadow: 6px 6px 16px rgba(0,0,0,16%);
    transition: 0.3s ease-out;

    &:hover {
        background: #ffffff;
        transition: 0.3s ease-in;
    }

    @media (max-width: 728px){
        & {
            margin-bottom: 32px;
        }
    }
`;

export const Perfil = styled.div`
    display: flex;
    align-items: center;
`;

export const PersonTitle = styled.p`
   padding: 5px 3px;
`;

export const Title = styled.h2`
    padding: 15px 0;
`;

export const Subtitle = styled.span`
    display: block;
    margin: 10px 0;
    line-height: 1.5em;
`;
