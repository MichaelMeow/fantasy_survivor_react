import c from './../constants';

const { defaultAdminState, types } = c;

export default (state = defaultAdminState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case types.ADD_CONTESTANT:
    const newContestant = {
      [action.id]: {
        name: action.name,
        ogTribe: action.ogTribe,
        photoURL: action.photoURL,
      }
    };
    newState.contestants = Object.assign({}, newState.contestants, newContestant);
  return newState;
  case types.ADD_TRIBE:
    const newTribe = {
      [action.id]: {
        name: action.name,
        tribeColor: action.tribeColor,
      }
    };
    newState.tribes = Object.assign({}, newState.tribes, newTribe)
    console.log(newState);
  return newState;
  case types.ADD_EPISODE:
    const newEpisode = {
      [action.id]: {
        episodeNumber: action.episodeNumber,
        episodeTitle: action.episodeTitle,
        rewardWinner: action.rewardWinner,
        immunityWinner: action.immunityWinner,
        episodeMessage: action.episodeMessage,
        airDate: action.airDate,
        out1: action.out1,
        out2: action.out2,
        out3: action.out3,
      }
    };
    let contestantList = [];
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
    let newEpisodeWithScoringTable = Object.assign({}, newEpisode[action.id], newEpisode[action.id].fullScoringTable)
    newState.episodes = Object.assign({}, newState.episodes, newEpisode);
    console.log(newState);
  return newState;
  default:
  return state;
  }
}
