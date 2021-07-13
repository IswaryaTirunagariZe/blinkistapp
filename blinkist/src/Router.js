import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MyLibrary from "./pages/MyLibrary";
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/MyLibrary" component={MyLibrary} />
                </Switch>
            </Router>
        )
    }
}