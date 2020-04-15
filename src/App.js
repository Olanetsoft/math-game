import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import StarMatch from './Components/LevelOne/StarMatch';
import GameLevelTwo from './Components/LevelTwo/StarMatchLevelTwo';



const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={StarMatch} />
                    <Route path='/nextLevel' component={GameLevelTwo} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;