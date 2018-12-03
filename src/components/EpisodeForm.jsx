import React from 'react';
import { connect } from 'react-redux';
import ScoringTable from './ScoringTable';

function EpisodeForm(props) {
  let lastEpisode = null;
  console.log(props.episode);
  if(props.episodes[0]){
    lastEpisode = parseInt(Object.keys(props.episodes).slice(-1)) + 1;
  };

  function submitForm(event){
    if (event.target.episodeNumber.value == false){
      props.onError("Please enter an episode number.")
      return;
    } else if (parseInt(event.target.episodeNumber.value) > Object.keys(props.episodes).length + 1) {
      props.onError("The episode number you entered was too high.")
      return;
    }
    event.preventDefault();
    props.onEpisodeFormSubmission();
    const { dispatch } = props;
    let action = {
      type: 'ADD_EPISODE',
      event: event,
      name: event.target.episodeTitle.value,
      rewardWinner: event.target.rewardWinner.value,
      immunityWinner: event.target.immunityWinner.value,
      message: event.target.episodeMessage.value,
      airDate: event.target.airDate.value,
      out: [event.target.out.value, event.target.out2.value, event.target.out3.value],
    }
    dispatch(action);
  }

  function loadEpisode(){
    episodeNumber.value = '666';
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h3>
          Enter Episode Info
        </h3>
        <div>
          Episode Number:
          <input
            type='number'
            id='episodeNumber'
            placeholder='Episode Number'/>
        </div>
        <div>
          Episode Title:
          <input
            type='text'
            id='episodeTitle'
            placeholder='Episode Title'/>
        </div>
        <div>
          Reward Winner:
          <input
            type='text'
            id='rewardWinner'
            placeholder='Reward Winner'/>
        </div>
        <div>
          Immunity Winner:
          <input
            type='text'
            id='immunityWinner'
            placeholder='Immunity Winner'/>
        </div>
        <div>
          Contestant Out:
          <input
            type='text'
            id='out'
            placeholder='Contestant Out'/>
        </div>
        <div>
          Contestant Out 2(optional):
          <input
            type='text'
            id='out2'
            placeholder='Contestant Out 2'/>
        </div>
        <div>
          Contestant Out 3(optional):
          <input
            type='text'
            id='out3'
            placeholder='Contestant Out 3'/>
        </div>
        <div>
          Episode Message:
          <input
            type='text'
            id='episodeMessage'
            placeholder='Episode Message'/>
        </div>
        <div>
          Air Date:
          <input
            type='date'
            id='airDate'
            placeholder='Air Date'/>
        </div>

        <ScoringTable
        contestants = {props.contestants}/>
        <div>
          <button type='submit'>Submit</button>
        </div>
        {
          props.isEpisodeSubmitted
          ? <div className='green'> Thank you, episode {lastEpisode} has been submitted </div>
          : <div></div>
        }
      </form>
      <button onClick={loadEpisode}>Load Episode</button>
      <style jsx>{`
        div {
          padding: 10px;
        }
        .green {
          background-color: lightgreen;
          border-radius: 5px;
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
