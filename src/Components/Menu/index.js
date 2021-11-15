import React from "react";

import { Link } from "react-router-dom";

import { AccountCircle, Home, LocalPhone } from "@material-ui/icons";
import { Menu, MenuContainer, MenuItem } from "./style";

export default function cMenu() {
    return (
        <Menu>
            <MenuContainer>
                <MenuItem>
                <AccountCircle htmlColor="#c2c2c2" />
                    <Link to="/login" className="c-grey-primary fs-18 fw-300">
                        Perfil
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Home htmlColor="#c2c2c2" />
                    <Link to="/login" className="c-grey-primary fs-18 fw-300">
                        Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <LocalPhone htmlColor="#c2c2c2" />
                    <Link to="/login" className="c-grey-primary fs-18 fw-300">
                        Suporte
                    </Link>
                </MenuItem>
            </MenuContainer>
        </Menu>
    );
}
