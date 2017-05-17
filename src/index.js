import Contents from './components/contents';
import Lesson from './components/lesson';
import Dashboard from './components/dashboard';
import NavBar from './components/navBar';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const app = document.getElementById('root');

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router>
                <div>
                    <Route path="/" component={NavBar}></Route>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/contents" component={Contents}></Route>
                    <Route exact path="/contents/:id" component={Lesson} />
                </div>
            </Router>
        </Provider>
    </MuiThemeProvider>, app);