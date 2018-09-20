import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'mobx-react';
import { configure } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router'

import AppContainer from './components/App';

const browserHistory = createBrowserHistory();

import stores from '../src/stores/Stores';

const history = syncHistoryWithStore(browserHistory, stores.routingStore);

configure({ enforceActions: "observed"});

ReactDOM.render(
    <Provider {... stores}>
        <Router history={history}>
           <AppContainer />
        </Router>
    </Provider>,      
       document.getElementById('app')
);