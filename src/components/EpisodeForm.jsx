import React from 'react';
import { connect } from 'react-redux';
import ScoringTable from './ScoringTable';
import { addEpisode, clearMessages, error } from './../actions';
import v4 from 'uuid';

function EpisodeForm(props) {
  let lastEpisode = null;
  if(props.episodes[0]){
    lastEpisode = parseInt(Object.keys(props.episodes).slice(-1)) + 1;
  };

  function submitForm(event){
    const { dispatch } = props;
    dispatch(clearMessages());
    if (event.target.episodeNumber.value == false){
      dispatch(error("Please enter an episode number."));
      window.scrollTo(0, 0);
      return;
    } else if (parseInt(event.target.episodeNumber.value) > Object.keys(props.episodes).length + 1) {
      dispatch(error("The episode number you entered was too high."));
      window.scrollTo(0, 0);
      return;
    } else if (parseInt(event.target.episodeNumber.value) < 1) {
      dispatch(error("The episode number you entered was below 1."));
      window.scrollTo(0, 0);
      return;
    } else if (event.target.episodeTitle.value == false ||
      event.target.rewardWinner.value == false ||
      event.target.immunityWinner.value == false ||
      event.target.episodeMessage.value == false ||
      event.target.airDate.value == false ||
      event.target.out1.value == false) {
      dispatch(error("Please complete all fields of the episode form."));
      window.scrollTo(0, 0);
      return;
    }
    event.preventDefault();
    dispatch(addEpisode(event.target.episodeTitle.value, event.target.episodeNumber.value, event.target.rewardWinner.value, event.target.immunityWinner.value, event.target.episodeMessage.value, event.target.airDate.value, event.target.out1.value, event.target.out2.value, event.target.out3.value));
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
