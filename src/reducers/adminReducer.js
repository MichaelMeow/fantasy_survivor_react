import defaultAdminSlice from './defaultAdminSlice';

export default (state = defaultAdminSlice, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case 'ADD_CONTESTANT':
    const newContestant = {
      [action.name]: {
        name: action.name,
        ogTribe: action.ogTribe,
        photoURL: action.photoURL,
      }
    };
    newState.contestants = newState.contestants.concat([newContestant]);
  return newState;
  case 'ADD_TRIBE':
    const newTribe = {
      [action.name]: {
        name: action.name,
        color: action.tribeColor,
      }
    };
    newState.tribes = newState.tribes.concat([newTribe]);
    console.log(newState);
  return newState;
  case 'ADD_EPISODE':
    const newEpisode = {
      [action.event.target.episodeNumber.value]: {
        episodeTitle: action.event.target.episodeTitle.value,
        rewardWinner: action.event.target.rewardWinner.value,
        immunityWinner: action.event.target.immunityWinner.value,
        episodeMessage: action.event.target.episodeMessage.value,
        airDate: action.event.target.airDate.value,
        out1: action.event.target.out1.value,
        out2: action.event.target.out2.value,
        out3: action.event.target.out3.value,
      }
    };
    let contestantList = Object.keys(state.contestants);
    let fullScoringTable = {};
    contestantList.map(function(contestantNumber, index){
      let contestant = Object.keys(state.contestants[contestantNumber])[0];
      const scoringTableRow = {
          [contestant]: {
            0: action.event.target[`${contestant}teamReward`].checked,
            1: action.event.target[`${contestant}teamImmunity`].checked,
            2: action.event.target[`${contestant}individualReward`].checked,
            3: action.event.target[`${contestant}individualImmunity`].checked,
            4: action.event.target[`${contestant}correctVote`].checked,
            5: action.event.target[`${contestant}recievedVote`].checked,
            6: action.event.target[`${contestant}votedOff`].checked,
            7: action.event.target[`${contestant}clue`].checked,
            8: action.event.target[`${contestant}foundIdol`].checked,
            9: action.event.target[`${contestant}foundAdvantage`].checked,
            10: parseInt(action.event.target[`${contestant}heldIdol`].value),
            11: action.event.target[`${contestant}heldAdvantage`].checked,
            12: action.event.target[`${contestant}quoted`].checked,
            13: action.event.target[`${contestant}chosenReward`].checked,
            14: parseInt(action.event.target[`${contestant}juryVotes`].value),
            15: parseInt(action.event.target[`${contestant}special`].value),
            16:action.event.target[`${contestant}tribe`].value,
          }
        }
      fullScoringTable = Object.assign({}, fullScoringTable, scoringTableRow)
    });
    let newEpisodeWithScoringTable = Object.assign({}, newEpisode[action.event.target.episodeNumber.value], newEpisode[action.event.target.episodeNumber.value].fullScoringTable)
    newState.episodes = newState.episodes.concat([newEpisodeWithScoringTable]);
    console.log(newState);
  return newState;
  default:
  return state;
  }
}
