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
    newState.isContestantSubmitted = true;
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
        name: action.event.target.episodeTitle.value,
        rewardWinner: action.event.target.rewardWinner.value,
        immunityWinner: action.event.target.immunityWinner.value,
        message: action.event.target.episodeMessage.value,
        airDate: action.event.target.airDate.value,
        out: {
          0: action.event.target.out.value,
          1: action.event.target.out2.value,
          2: action.event.target.out3.value,
        }
      }
    };
    newState.episodes = newState.episodes.concat([newEpisode]);
    console.log(newState);
  return newState;
  default:
  return state;
  }
}
