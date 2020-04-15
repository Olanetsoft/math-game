import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import StarMatch from './StarMatch';
import GameLevelTwo from './GameLevelTwo';



const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={StarMatch} />
                    <Route path='/nextLevel' component={GameLevelTwo} />
                </Switch>
            </Router>

            {/* <StarMatch /> */}
        </div>
    );
};

export default App;