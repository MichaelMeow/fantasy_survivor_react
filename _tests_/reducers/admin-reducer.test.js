import adminReducer from './../../src/reducers/adminReducer';
import defaultAdminSlice from './../../src/reducers/defaultAdminSlice';

describe("adminReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(adminReducer(defaultAdminSlice, { type: null })).toEqual({
      contestants: [],
      isContestantSubmitted: false,
      isEpisodeSubmitted: false,
    });
  });
  test('Should add contestant if contestant submitted', () => {
    expect(adminReducer(defaultAdminSlice, {
      type: 'ADD_CONTESTANT',
      name: 'contestantName',
      ogTribe: 'David',
      photoURL: 'example.jpg',

     })).toEqual({
      contestants: [{
        contestantName: {
          name: 'contestantName',
          ogTribe: 'David',
          photoURL: 'example.jpg',
        }
      }],
      isContestantSubmitted: true,
      isEpisodeSubmitted: false,
    });
  });

});
