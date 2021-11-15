import React from 'react';
import Lottie from "react-lottie";
import { Link } from 'react-router-dom';

import lottie from "../../../assets/lotties/69266-work.json";
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import { Container, Label, Left, Options, Right, Select, Title, WrapForm } from './style';

export default function Form() {
    return (
        <Container>
            <Left>
                <Lottie
                    options={{
                        animationData: lottie
                    }}
                    isClickToPauseDisabled={true}
                    width={460}
                    height={460}
                />
            </Left>
            <Right>
                <Title className="fs-32 fw-900 c-dark">Login</Title>
                <Options>
                    <Select className="fs-15 fw-400 c-dark">Recrutador</Select>
                    <Select className="fs-15 fw-400 c-dark">Freelancer</Select>
                </Options>
               <WrapForm>
                    <Label className="fs-18 fw-700 c-dark">CPF</Label>
                    <Input type="text" />
               </WrapForm>
               <WrapForm>
                    <Label className="fs-18 fw-700 c-dark">Senha</Label>
                    <Input type="password" />
               </WrapForm>
               <Button>ENTRAR</Button>
               <WrapForm>
                 <Link className="fs-18 fw-700 c-dark">Cadastre-Se</Link>
                 <Label className="fs-15 fw-300 c-grey-primary" style={{padding: "5px 0"}}>
                    Ainda Não Possui Conta? Cadastre-Se No Site.
                 </Label>
                 <Button>Cadastre-se</Button>
               </WrapForm>
            </Right>
        </Container>
    )
}
