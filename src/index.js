import './assets/css/reset.less';
import './assets/css/main.less';
import 'amfe-flexible/index.js'
import React from 'react';
import ReactDOM from 'react-dom';
import http from './common/http/http.js'
import api from './common/http/api.js'
import './common/mock/mock.js';
import { Route, HashRouter as Router , Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store.js';
import Loading from './components/Loading/Loading.jsx';
import App from './pages/App.jsx';
// import initReactFastclick from 'react-fastclick';
// initReactFastclick();
// store.subscribe(() =>{
//     console.log(store.getState())
// });
// store.dispatch(loadingState(true));
window.$http = http
window.$api = api
const routes = (
    <Provider store={store}>
        <div className="router-view">
        <Loading></Loading>
        <Router>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </Router>
        </div>
    </Provider>
)
ReactDOM.render(
    routes,
    document.getElementById('app')
);