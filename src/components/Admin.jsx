import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleContestantFormSubmission = this.handleContestantFormSubmission.bind(this);
    this.handleEpisodeFormSubmission = this.handleEpisodeFormSubmission.bind(this);
  }

  handleContestantFormSubmission(event) {
    event.preventDefault();

    const { dispatch } = this.props;
    const action = {
      type: 'ADD_CONTESTANT',
      name: this.name.value,
      ogTribe: this.ogTribe.value,
      photoURL: this.photoURL.value
    }
    dispatch(action);

    this.name.value = '';
    this.ogTribe.value = '';
    this.photoURL.value = '';
  }

  handleEpisodeFormSubmission(event) {
    event.preventDefault();

    const { dispatch } = this.props;
    const action = {
      type: 'ADD_EPISODE',
      name: this.episodeTitle.value,
      number: this.episodeNumber.value,
      rewardWinner: this.rewardWinner.value,
      immunityWinner: this.immunityWinner.value,
      message: this.episodeMessage.value,
      airDate: this.airDate.value,
      out: {
        0: this.out.value,
        1: this.out2.value,
        2: this.out3.value
      },
    }
    dispatch(action);
    this.episodeTitle.value = '';
    this.episodeNumber.value = '';
    this.rewardWinner.value = '';
    this.immunityWinner.value = '';
    this.episodeMessage.value = '';
    this.airDate.value = '';
    this.out.value = '';
    this.out2.value = '';
    this.out3.value = '';
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
          <div>
            <input
              type='text'
              id='name'
              placeholder='Contestant Name'
              ref={(input) => {this.name = input;}}/>
          </div>
          <div>
            Contestant Starting Tribe
          </div>
          <div>
            <input
              type='text'
              id='ogTribe'
              placeholder='Original Tribe'
              ref={(input) => {this.ogTribe = input;}}/>
          </div>
          <div>
            Contestant Photo URL (Headshot from CBS.com, example: https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/13c7e74872b87a9d_svr37_800x1000_nataliaazoqa.jpg)
          </div>
          <div>
            <input
              type='text'
              id='photoURL'
              placeholder='photo URL'
              ref={(input) => {this.photoURL = input;}}/>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <div>
            {this.state.isContestantSubmitted ? 'Submitted' : ''}
          </div>
        </form>
        <form onSubmit={this.handleEpisodeFormSubmission}>
          <h3>
            Enter Episode Info
          </h3>
          <div>
            Episode Number:
            <input
              type='number'
              id='episodeNumber'
              placeholder='Episode Number'
              ref={(input) => {this.episodeNumber = input;}}/>
          </div>
          <div>
            Episode Title:
            <input
              type='text'
              id='episodeTitle'
              placeholder='Episode Title'
              ref={(input) => {this.episodeTitle = input;}}/>
          </div>
          <div>
            Reward Winner:
            <input
              type='text'
              id='rewardWinner'
              placeholder='Reward Winner'
              ref={(input) => {this.rewardWinner = input;}}/>
          </div>
          <div>
            Immunity Winner:
            <input
              type='text'
              id='immunityWinner'
              placeholder='Immunity Winner'
              ref={(input) => {this.immunityWinner = input;}}/>
          </div>
          <div>
            Contestant Out:
            <input
              type='text'
              id='out'
              placeholder='Contestant Out'
              ref={(input) => {this.out = input;}}/>
          </div>
          <div>
            Contestant Out 2(optional):
            <input
              type='text'
              id='out2'
              placeholder='Contestant Out 2'
              ref={(input) => {this.out2 = input;}}/>
          </div>
          <div>
            Contestant Out 3(optional):
            <input
              type='text'
              id='out3'
              placeholder='Contestant Out 3'
              ref={(input) => {this.out3 = input;}}/>
          </div>
          <div>
            Episode Message:
          </div>
          <div
            id='episodeMessage'
            contentEditable={true}
            ref={(div) => {this.episodeMessage = div;}}>
            Type here. You can insert images too
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQCze-mfukcuvzKk7Ilj2zQ0CS6PbOkq7ZhRInnNd1Yz3TQzU4e&t=1" />
          </div>
          //I realize this contentEditable is problematic in REACT I am leaving it here to fix later.
          <div>
            Enter air date of next episode:
            <input
              type='date'
              id='airDate'
              ref={(input) => {this.airDate = input;}}/>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <div>
            {this.state.isEpisodeSubmitted ? 'Submitted' : ''}
          </div>
        </form>
        <style jsx>{`
          div {
            padding: 10px;
          }
          button {
            padding: 5px 35px;
            background-color: #8EE7EC;
            border-radius: 5px;
            border: none;
            color: #010101;
          }
        `}</style>
      </div>
    );
  }
}

Admin.propTypes = {
  onContestantInfoSubmit: PropTypes.func,
  onEpisodeInfoSubmit: PropTypes.func
};

export default connect()(Admin);
