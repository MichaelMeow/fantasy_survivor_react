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
    console.log(newState);
    newState.isContestantSubmitted = true;
  return newState;
    default:
  return state;
  }
}
