import React, { useState } from "react";
import Button from "../../../Components/Button";
import Modal from "../../../Components/Modal";

import { Container, Perfil, PersonTitle, Subtitle, Title, Wrap } from "./style";

export default function Service() {
    const [active, setActive] = useState(false);
    const data = [
        {
            name: "Marina Silva",
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam pariatur fuga numquam necessitatibus voluptas, obcaecati voluptatibus totam iste laboriosam eum illum ex sunt error alias non, laborum magnam! Nemo labore, molestias, beatae velit nesciunt perferendis dicta, consequatur earum ratione reiciendis ex eos a. Quaerat sint doloremque et quod deserunt.`,
            title: "Olhar Minha Filha De 2 Anos",
        },
        {
            name: "Marina Silva",
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam pariatur fuga numquam necessitatibus voluptas, obcaecati voluptatibus totam iste laboriosam eum illum ex sunt error alias non, laborum magnam! Nemo labore, molestias, beatae velit nesciunt perferendis dicta, consequatur earum ratione reiciendis ex eos a. Quaerat sint doloremque et quod deserunt.`,
            title: "Olhar Minha Filha De 2 Anos",
        },
        {
            name: "Marina Silva",
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam pariatur fuga numquam necessitatibus voluptas, obcaecati voluptatibus totam iste laboriosam eum illum ex sunt error alias non, laborum magnam! Nemo labore, molestias, beatae velit nesciunt perferendis dicta, consequatur earum ratione reiciendis ex eos a. Quaerat sint doloremque et quod deserunt.`,
            title: "Olhar Minha Filha De 2 Anos",
        },
        {
            name: "Marina Silva",
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam pariatur fuga numquam necessitatibus voluptas, obcaecati voluptatibus totam iste laboriosam eum illum ex sunt error alias non, laborum magnam! Nemo labore, molestias, beatae velit nesciunt perferendis dicta, consequatur earum ratione reiciendis ex eos a. Quaerat sint doloremque et quod deserunt.`,
            title: "Olhar Minha Filha De 2 Anos",
        },
    ];

    function handleClick() {
        setActive(active ? false : true);
    }

    return (
        <>
            <Container style={{ filter: active ? "blur(1.2px)" : null }}>
                {data.map(({ name, title, subtitle }, index) => {
                    return (
                        <Wrap key={index}>
                            <Perfil>
                                <PersonTitle className="fs-18 c-dark fw-400">
                                    {name}
                                </PersonTitle>
                            </Perfil>
                            <Title className="fs-24 c-dark fw-900">
                                {title}
                            </Title>
                            <Subtitle className="fs-15 c-grey-primary fw-300">
                                {subtitle}
                            </Subtitle>
                            <Button onClick={handleClick}>
                                Fazer Proposta
                            </Button>
                        </Wrap>
                    );
                })}
            </Container>
            <Modal active={active} onClick={handleClick} />
        </>
    );
}
