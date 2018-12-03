import React from 'react';
import { connect } from 'react-redux';
import ScoringTable from './ScoringTable';

function EpisodeForm(props) {
  let lastEpisode = null;
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
    } else if (parseInt(event.target.episodeNumber.value) < 1) {
      props.onError("The episode number you entered was below 1.")
      return;
    } else if (event.target.episodeTitle.value == false ||
      event.target.rewardWinner.value == false ||
      event.target.immunityWinner.value == false ||
      event.target.episodeMessage.value == false ||
      event.target.airDate.value == false ||
      event.target.out1.value == false) {
      props.onError("Please complete all fields of the episode form.")
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
      out: [event.target.out1.value, event.target.out2.value, event.target.out3.value],
    }
    dispatch(action);
    const initialState = {
      episodeNumber: '',
      episodeTitle: '',
      rewardWinner: '',
      immunityWinner: '',
      out1: '',
      out2: '',
      out3: '',
      episodeMessage: '',
      airDate: '',
      scoringTable: [],
    }
    props.onStateChange(initialState);
  }

  function loadEpisode(){
    let epNumber = parseInt(episodeNumber.value)
    if (epNumber <= Object.keys(props.episodes).length && epNumber > 0){
      console.log("we're in");
      const episodeIndex = parseInt(epNumber)-1;
      let newState = Object.assign({}, props.episodeFormState, props.episodes[episodeIndex]);
      console.log(newState);
      props.onStateChange(newState);
    }
  }

  function stateChange(event){
    let newState = Object.assign({}, props.episodeFormState);
    newState[event.target.id] = event.target.value;
    console.log(newState);
    props.onStateChange(newState);
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
            placeholder='Episode Number'
            onChange={loadEpisode}/>
        </div>
        <div>
          Episode Title:
          <input
            type='text'
            id='episodeTitle'
            placeholder='Episode Title'
            value={props.episodeFormState.episodeTitle}
            onChange={stateChange}/>
        </div>
        <div>
          Reward Winner:
          <input
            type='text'
            id='rewardWinner'
            placeholder='Reward Winner'
            value={props.episodeFormState.rewardWinner}
            onChange={stateChange}/>
        </div>
        <div>
          Immunity Winner:
          <input
            type='text'
            id='immunityWinner'
            placeholder='Immunity Winner'
            value={props.episodeFormState.immunityWinner}
            onChange={stateChange}/>
        </div>
        <div>
          Contestant Out:
          <input
            type='text'
            id='out1'
            placeholder='Contestant Out'
            value={props.episodeFormState.out1}
            onChange={stateChange}/>
        </div>
        <div>
          Contestant Out 2(optional):
          <input
            type='text'
            id='out2'
            placeholder='Contestant Out 2'
            value={props.episodeFormState.out2}
            onChange={stateChange}/>
        </div>
        <div>
          Contestant Out 3(optional):
          <input
            type='text'
            id='out3'
            placeholder='Contestant Out 3'
            value={props.episodeFormState.out3}
            onChange={stateChange}/>
        </div>
        <div>
          Episode Message:
          <input
            type='text'
            id='episodeMessage'
            placeholder='Episode Message'
            value={props.episodeFormState.episodeMessage}
            onChange={stateChange}/>
        </div>
        <div>
          Air Date:
          <input
            type='date'
            id='airDate'
            placeholder='Air Date'
            value={props.episodeFormState.airDate}
            onChange={stateChange}/>
        </div>

        <ScoringTable
        contestants = {props.contestants}
        episodes = {props.episodes}/>
        <div>
          <button type='submit'>Submit</button>
        </div>
        {
          props.isEpisodeSubmitted
          ? <div className='green'> Thank you, episode {lastEpisode} has been submitted </div>
          : <div></div>
        }
      </form>
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
