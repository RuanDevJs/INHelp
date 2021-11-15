import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import Service from "../../Parts/Home/Service";

export default function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>INHelp| Home</title>
            </Helmet>
            <Header />
            <Service />
        </>
    );
}
