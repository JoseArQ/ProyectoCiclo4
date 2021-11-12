import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from "../login/login";

export default function AppRouter() {
    
    return (
        <Router>
            <Switch>
                <Route exact path={['/', '/login']} component={Login} />
                <Route path={['*']} component={() => (
                    <h1 style={{marginTop: 300}}>
                        404
                        <br />
                        page not found
                    </h1>
                    

                    )} />
            </Switch>
        </Router>

    )
}

/* function Home(){
    return <h1 style={{marginTop: "20%"}}>HOME</h1>
} */