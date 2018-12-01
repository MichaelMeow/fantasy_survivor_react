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
    console.log(newState);
  return newState;
  case 'ADD_EPISODE':
    const newEpisode = {
      [action.number]: {
        name: action.name,
        rewardWinner: action.rewardWinner,
        immunityWinner: action.immunityWinner,
        message: action.message,
        airDate: action.airDate,
        out: {
          0: action.out[0],
          1: action.out[1],
          2: action.out[2],
        }
      }
    };
    newState.episodes = newState.episodes.concat([newEpisode]);
    newState.isEpisodeSubmitted = true;
    console.log(newState);
  return newState;
  case 'RESET_ADMIN':
    newState.isEpisodeSubmitted = false;
    newState.isContestantSubmitted = false;
  return newState;
  default:
  return state;
  }
}
