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
        alec-merlino: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        alison-raybould: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/c70dba33ac036406_svr37_800x1000_alisonraybould.jpg',
        },
        angelina-keeley: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/516aca89f77c9a6b_svr37_800x1000_angelinakeeley.jpg',
        },
        bi-nguyen: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        carl-boudreaux: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/8cb547f9d9960fe9_svr37_800x1000_carlboudreaux.jpg',
        },
        christian-hubcki: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/2f368ae8a128c594_svr_christianh_800x1000.jpg',
        },
        dan-rengering: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/b7af171dcd9574bf_svr37_800x1000_danrengering.jpg',
        },
        davie-rickenbacker: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/7385df05f4baa622_svr37_800x1000_davierickenbacker.jpg',
        },
        elizabeth-olsen: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        gabby-pascuzzi: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/9128154ea29ea81f_svr37_800x1000_gabbypascuzzi_.jpg',
        },
        jeremy-crawford: {
          currentTribe: "Goliath",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        jessica-peet: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        john-hennigan: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/297329a83288b25f_svr37_800x1000_johnhennigan.jpg',
        },
        kara-kay: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/806bb21886d2dcf0_svr37_800x1000_karakay.jpg',
        },
        lyrsa-torres: {
          currentTribe: "Jabeni",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        mike-white: {
          currentTribe: "Kalokalo",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        natalia-azoqa: {
          currentTribe: "Vuku",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        natalie-cole: {
          currentTribe: "Jabeni",
          originalTribe: "Goliath",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        nick-wilson: {
          currentTribe: "Kalokalo",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        pat-cusack: {
          currentTribe: "David",
          originalTribe: "David",
          photoURL: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/4be6faee886ff178_svr37_800x1000_alecmerlino.jpg',
        },
        
      }
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
