import React from 'react';
import { connect } from 'react-redux';
import { addContestant } from './../actions';
import v4 from 'uuid';

function ContestantForm(props) {
  let contestantName = null;
  let ogTribe = null;
  let photoURL = null;
  let lastContestant = null;
  if (props.contestants[0]){
      lastContestant = Object.keys(props.contestants.slice(-1)[0])[0];
  }


  function submitContestant(event) {
    event.preventDefault();
    if (event.target.contestantName.value == false){
      props.onError("Please enter an contestant name.")
      return;
    }
    props.onContestantFormSubmission();
    const { dispatch } = props;
    dispatch(addContestant(contestantName.value, ogTribe.value, photoURL.value, v4()));
    contestantName.value = '';
    ogTribe.value = '';
    photoURL.value = '';
  }

  return (
    <div>
      <form  onSubmit={submitContestant}>
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
            id='contestantName'
            placeholder='Contestant Name'
            ref={(input) => {contestantName = input;}}/>
        </div>
        <div>
          Contestant Starting Tribe
        </div>
        <div>
          <input
            type='text'
            id='ogTribe'
            placeholder='Original Tribe'
            ref={(input) => {ogTribe = input;}}/>
        </div>
        <div>
          Contestant Photo URL (Headshot from CBS.com, example: https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w270/cast/13c7e74872b87a9d_svr37_800x1000_nataliaazoqa.jpg)
        </div>
        <div>
          <input
            type='text'
            id='photoURL'
            placeholder='photo URL'
            ref={(input) => {photoURL = input;}}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div>
          {
            props.isContestantSubmitted
            ? <div className='green'> Thank you, contestant {lastContestant} has been created </div>
            : <div></div>
          }
        </div>
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

export default connect()(ContestantForm);
