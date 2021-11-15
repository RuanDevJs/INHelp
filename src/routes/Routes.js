import React from "react";
import { Switch, Route, Redirect} from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

function CustomRoute({isPrivate, ...props}){
    const authenticated = false;

    if(isPrivate && !authenticated){
        return(
            <Redirect to="/login" />
        )
    }

    return(
        <Route {...props} />
    )
}

export default function Routes(){
    return(
        <Switch>
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute exact path="/login" component={Login} />
        </Switch>
    )
}
