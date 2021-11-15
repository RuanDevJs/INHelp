import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Form from "../../Parts/Login/Form";

export default function Login() {
    return (
        <>
            {" "}
            <Helmet>
                <meta charSet="utf-8" />
                <title>INHelp | Login</title>
            </Helmet>
            <Header />
            <Form />
        </>
    );
}
