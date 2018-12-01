import React from 'react';
import { connect } from 'react-redux';

function EpisodeForm(props) {

  let episodeTitle = null;
  let episodeNumber = null;
  let rewardWinner = null;
  let immunityWinner = null;
  let episodeMessage = null;
  let airDate = null;
  let out = null;
  let out2 = null;
  let out3 = null;
  let lastEpisode = null;
  if(props.episodes[0]){
    lastEpisode = Object.keys(props.episodes.slice(-1)[0])[0];
  };

  function handleEpisodeFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_EPISODE',
      name: episodeTitle.value,
      number: episodeNumber.value,
      rewardWinner: rewardWinner.value,
      immunityWinner: immunityWinner.value,
      message: episodeMessage.value,
      airDate: airDate.value,
      out: {
        0: out.value,
        1: out2.value,
        2: out3.value
      },
    }
    dispatch(action);
    episodeTitle.value = '';
    episodeNumber.value = '';
    rewardWinner.value = '';
    immunityWinner.value = '';
    episodeMessage.value = '';
    airDate.value = '';
    out.value = '';
    out2.value = '';
    out3.value = '';
  }

  return (
    <div>
      <form onSubmit={handleEpisodeFormSubmission}>
        <h3>
          Enter Episode Info
        </h3>
        <div>
          Episode Number:
          <input
            type='number'
            id='episodeNumber'
            placeholder='Episode Number'
            ref={(input) => {episodeNumber = input;}}/>
        </div>
        <div>
          Episode Title:
          <input
            type='text'
            id='episodeTitle'
            placeholder='Episode Title'
            ref={(input) => {episodeTitle = input;}}/>
        </div>
        <div>
          Reward Winner:
          <input
            type='text'
            id='rewardWinner'
            placeholder='Reward Winner'
            ref={(input) => {rewardWinner = input;}}/>
        </div>
        <div>
          Immunity Winner:
          <input
            type='text'
            id='immunityWinner'
            placeholder='Immunity Winner'
            ref={(input) => {immunityWinner = input;}}/>
        </div>
        <div>
          Contestant Out:
          <input
            type='text'
            id='out'
            placeholder='Contestant Out'
            ref={(input) => {out = input;}}/>
        </div>
        <div>
          Contestant Out 2(optional):
          <input
            type='text'
            id='out2'
            placeholder='Contestant Out 2'
            ref={(input) => {out2 = input;}}/>
        </div>
        <div>
          Contestant Out 3(optional):
          <input
            type='text'
            id='out3'
            placeholder='Contestant Out 3'
            ref={(input) => {out3 = input;}}/>
        </div>
        <div>
          Episode Message:
          <input
            type='text'
            id='message'
            placeholder='Episode Message'
            ref={(input) => {episodeMessage = input;}}/>
        </div>
        <div>
          Enter air date of next episode:
          <input
            type='date'
            id='airDate'
            ref={(input) => {airDate = input;}}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div>
          {props.isEpisodeSubmitted ? 'Thank you, episode ' + lastEpisode + ' has been submitted' : ''}
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
  )
}

export default connect()(EpisodeForm);
