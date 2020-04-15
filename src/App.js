import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import StarMatch from './Components/LevelOne/StarMatch';
import GameLevelTwo from './Components/LevelTwo/StarMatchLevelTwo';
import GameLevelThree from './Components/LevelThree/StarMatchLevelThree';
import GameLevelFour from './Components/LevelFour/StarMatchLevelFour';
import GameLevelFive from './Components/LevelFive/StarMatchLevelFive';
// import GameLevelSix from './Components/LevelTwo/StarMatchLevelTwo';
// import GameLevelSeven from './Components/LevelTwo/StarMatchLevelTwo';
// import GameLevelEight from './Components/LevelTwo/StarMatchLevelTwo';
// import GameLevelNine from './Components/LevelTwo/StarMatchLevelTwo';
// import GameLevelTen from './Components/LevelTwo/StarMatchLevelTwo';



const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={StarMatch} />
                    <Route exact path='/LevelTwo' component={GameLevelTwo} />
                    <Route path='/LevelThree' component={GameLevelThree} />
                    <Route path='/LevelFour' component={GameLevelFour} />
                    <Route path='/LevelFive' component={GameLevelFive} />
                    <Route path='/LevelFve' component={GameLevelTwo} />
                    <Route path='/LevelSix' component={GameLevelTwo} />
                    <Route path='/LevelSeven' component={GameLevelTwo} />
                    <Route path='/nextEight' component={GameLevelTwo} />
                    <Route path='/nextNine' component={GameLevelTwo} />
                    <Route path='/nextTen' component={GameLevelTwo} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;