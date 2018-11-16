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
      sessionUser: null,
      contestants: {
        alecmerlino: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        alisonraybould: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/c70dba33ac036406_svr37_800x1000_alisonraybould.jpg',
        },
        angelinakeeley: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/516aca89f77c9a6b_svr37_800x1000_angelinakeeley.jpg',
        },
        binguyen: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        carlboudreaux: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/8cb547f9d9960fe9_svr37_800x1000_carlboudreaux.jpg',
        },
        christianhubcki: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/2f368ae8a128c594_svr_christianh_800x1000.jpg',
        },
        danrengering: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/b7af171dcd9574bf_svr37_800x1000_danrengering.jpg',
        },
        davierickenbacker: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/7385df05f4baa622_svr37_800x1000_davierickenbacker.jpg',
        },
        elizabetholsen: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        gabbypascuzzi: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/9128154ea29ea81f_svr37_800x1000_gabbypascuzzi_.jpg',
        },
        jeremycrawford: {
          currentTribe: "Goliath",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        jessicapeet: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        johnhennigan: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/297329a83288b25f_svr37_800x1000_johnhennigan.jpg',
        },
        karakay: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/806bb21886d2dcf0_svr37_800x1000_karakay.jpg',
        },
        lyrsatorres: {
          currentTribe: "Jabeni",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        mikewhite: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        nataliaazoqa: {
          currentTribe: "Vuku",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        nataliecole: {
          currentTribe: "Jabeni",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        nickwilson: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        patcusack: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        
      }
    };
  }
  
  handleContestantInfoSubmit(contestant) {
    console.log(contestant.name);
    console.log(contestant.ogTribe);
    console.log(contestant.photoURL);
    const names = contestant.name.split(" ");
    console.log(names);
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
