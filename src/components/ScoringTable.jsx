import React from 'react';
import { connect } from 'react-redux';


function ScoringTable(props) {

  let teamReward = null;
  let teamImmunity = null;
  let individualReward = null;
  let individualImmunity = null;
  let correctVote = null;
  let recievedVote = null;
  let votedOff = null;
  let recievedClue = null;
  let foundIdol = null;
  let foundAdvantage = null;
  let heldIdol = null;
  let heldAdvantage = null;
  let quoted = null;
  let chosenForReward = null;
  let juryVotes = null;
  let special = null;
  let reassignTribe = null;

  return (
    <div>
    <div>
      Enter air date of next episode:
      <input
        type='date'
        id='airDate'/>
    </div>
    <div>
      Episode Message:
      <input
        type='text'
        id='message'
        placeholder='Episode Message'/>
    </div>
    </div>
  )
}

export default connect()(ScoringTable);
