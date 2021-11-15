import styled from "styled-components";

export const Menu = styled.div`
    background: #f9f9f9;
    padding: 26px;
`;

export const MenuContainer = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 728px){
        & {
            width: 100%;
        }
    }
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 20px;

    a {
        margin-left: 4px;
    }

    @media (max-width: 728px){
        & {
            width: 50px;
            padding: 0 10px;
        }

        a {
            display: block;
            font-size: 12px;
        }
    }
`;
