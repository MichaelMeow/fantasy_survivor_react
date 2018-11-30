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
  case 'ADD_EPISODE':
    const newEpisode = {
      [action.number]: {
        name: action.name,
        rewardWinner: action.rewardWinner,
        immunityWinner: action.immunityWinner,
        message: action.message,
        airDate: action.airDate,
      }
    };
    newState.episodes = newState.episodes.concat([newEpisode]);
    newState.isEpisodeSubmitted = true;
  return newState;
  default:
  return state;
  }
}
