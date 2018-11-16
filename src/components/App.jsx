import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Scoreboard from './Scoreboard';
import Rules from './Rules';
import Episodes from './Episodes';
import Admin from './Admin';
import Move from './Move';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sessionUser: null,
      contestants: {
        alecmerlino: {
          currentTribe: 'Kalokalo',
          originalTribe: 'Goliath',
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        }
      }
    };
    this.handleContestantInfoSubmit = this.handleContestantInfoSubmit.bind(this);
  }
  
  handleContestantInfoSubmit(contestant) {
    let newContestantState = JSON.parse(JSON.stringify(this.state.contestants));
    const names = contestant.name.split(' ');
    const fullnamelowercase = (names[0] + names[1]).toLowerCase();
    newContestantState[fullnamelowercase] = {
      firstName: names[0],
      lastName: names[1],
      originalTribe: contestant.ogTribe,
      photoURL: contestant.photoURL,
    };
    this.setState({contestants: newContestantState});
  }
  

  
  render(){
    document.body.style.margin = '0px';
    return (
      <div>
        <Header/>
        <Nav/>
        <Switch>
          <Route path='/move' component={Move} />
          <Route path='/scoreboard' component={Scoreboard} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/rules' component={Rules} />
          <Route path='/Admin' render={()=> <Admin onContestantInfoSubmit={this.handleContestantInfoSubmit} />} />
        </Switch>
        
        <style jsx global>{`
          * {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 12px;
          }
          `}</style>
      </div>
    );
  }
}

export default App;
