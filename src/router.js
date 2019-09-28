import React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面组件
import Home from './views/home';
import Page from './views/Pages';

// 路由
const getRouter = () => {
    return <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
    </Switch>
}

export default getRouter;