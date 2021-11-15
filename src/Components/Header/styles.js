import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    padding: 15px;
    box-shadow: 1px 1px 16px rgba(0,0,0,16%);
`;

export const Container = styled.div`
    max-width: 80%;
    padding: 5px 0;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 728px){
        & {
            max-width: 100%;
        }
    }
`;

export const Left = styled.div`
    flex: 1;

    @media (max-width: 728px){
        & {
           flex: 1;
        }
    }
`;

export const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 728px){
        & {
           flex: 1;
        }
    }
`;

export const Right = styled.div`
    flex: 1;

    @media (max-width: 728px){
        & {
            display: none;
        }
    }
`;

