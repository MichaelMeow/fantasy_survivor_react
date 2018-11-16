import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import SubmitButton from './SubmitButton';
import Nav from './Nav'
import Scoreboard from './Scoreboard'
import Rules from './Rules'
import Episodes from './Episodes'
import Admin from './Admin'
import Move from './Move'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
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
      <Route path='/Admin' component={Admin} />
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
