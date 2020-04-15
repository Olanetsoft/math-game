import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import StarMatch from './StarMatch';



const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={StarMatch} />
                    {/* <Route path='/shop' component={ShopPage} /> */}
                </Switch>
            </Router>

            {/* <StarMatch /> */}
        </div>
    );
};

export default App;