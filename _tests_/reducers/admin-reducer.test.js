import adminReducer from './../../src/reducers/adminReducer';
import defaultAdminSlice from './../../src/reducers/defaultAdminSlice';

describe("adminReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(adminReducer(defaultAdminSlice, { type: null })).toEqual({
      contestants: [],
      episodes: [],
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
      episodes: [],
      isContestantSubmitted: true,
      isEpisodeSubmitted: false,
    });
  });
  test('Should add episode if episode submitted', () => {
    expect(adminReducer(defaultAdminSlice, {
      type: 'ADD_EPISODE',
      name: 'episode name',
      number: 1,
      rewardWinner: 'Alec Merlino',
      immunityWinner: 'Mike White',
      message: 'Good episode!',
      airDate: '11/28/2018',
      out: ['out1', 'out2', null]

     })).toEqual({
      contestants: [],
      episodes: [{
        1: {
          name: 'episode name',
          rewardWinner: 'Alec Merlino',
          immunityWinner: 'Mike White',
          message: 'Good episode!',
          airDate: '11/28/2018',
          out: {
            0: 'out1',
            1: 'out2',
            2: null
          },
        }
      }],
      isContestantSubmitted: false,
      isEpisodeSubmitted: true,
    });
  });

});
