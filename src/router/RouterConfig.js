import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App';
import ChildComponent from '../components/ChildComponent';
import ParentComponent from "../components/ParentComponent";


class RouterConfig extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact />
                    <Route path="/child" component={ChildComponent}/>
                    <Route path="/parent" component={ParentComponent}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;