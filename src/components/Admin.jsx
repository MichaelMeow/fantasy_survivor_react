import React from 'react';
import PropTypes from 'prop-types';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
    this.handleContestantFormSubmission = this.handleContestantFormSubmission.bind(this);
  }
  
  handleContestantFormSubmission(event) {
    event.preventDefault();
    this.props.onContestantInfoSubmit({
      name: this.name.value,
      ogTribe: this.ogTribe.value,
      photoURL: this.photoURL.value
    });
    let newState = this.state.isSubmitted
    newState = true;
    this.setState({isSubmitted: newState})
    // this.submittedName = _name.value + " has been submitted.";
    this.name.value = '';
    this.ogTribe.value = '';
    this.photoURL.value = '';
    
  }

  render(){
    return (
      
      <div>
      Admin Page
      <form  onSubmit={this.handleContestantFormSubmission}>
      <h3>
      Add Contestants:
      </h3>
      <div>
      To be used at beginning of the season to add survivor contestants to the game.
      </div>
      <div>
      Contestant First and Last Name
      </div>
      <input
      type='text'
      id='name'
      placeholder='Contestant Name'
      ref={(input) => {this.name = input;}}/>
      <div>
      Contestant Starting Tribe
      </div>
      <input
      type='text'
      id='ogTribe'
      placeholder='Original Tribe'
      ref={(input) => {this.ogTribe = input;}}/>
      <div>
      Contestant Photo URL (Headshot from CBS.com, example: https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/13c7e74872b87a9d_svr37_800x1000_nataliaazoqa.jpg)
      </div>
      <input
      type='text'
      id='photoURL'
      placeholder='photo URL'
      ref={(input) => {this.photoURL = input;}}/>
      <div>
      <button type='submit'>Submit</button>
      </div>
      <div>
      {this.state.isSubmitted ? `Submitted` : ''}
      </div>
      </form>
      
      
      
      <style jsx>{`
        
        `}</style>
        </div>
      );
  }
}

Admin.propTypes = {
  onContestantInfoSubmit: PropTypes.func
};

export default Admin;
