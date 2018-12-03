import adminReducer from './../../src/reducers/adminReducer';
import { addTribe, addContestant, addEpisode } from './../../src/actions';

describe("adminReducer", () => {

  test('Should add contestant if contestant submitted', () => {
    expect(adminReducer({}, addContestant('contestantName', 'David', 'example.jpg', 'xxx1'))).toEqual({
      contestants: {
        xxx1: {
          name: 'contestantName',
          ogTribe: 'David',
          photoURL: 'example.jpg',
        }
      },
    });
  });
  test('Should add tribe if tribe submitted', () => {
    expect(adminReducer({}, addTribe('tribeName', '#000000', 'xxx1'))).toEqual({
      tribes: {
        xxx1: {
          name: 'tribeName',
          tribeColor: '#000000',
        }
      },
    });
  });
  test('Should add episode if episode submitted', () => {
    expect(adminReducer({}, addEpisode('episode name', '1', 'Alec Merlino', 'Mike White', 'Good episode!', '11/28/2018', 'out1', 'out2', 'out3', 'xxx1'))).toEqual({
      episodes: {
        xxx1: {
          episodeNumber: '1',
          episodeTitle: 'episode name',
          rewardWinner: 'Alec Merlino',
          immunityWinner: 'Mike White',
          episodeMessage: 'Good episode!',
          airDate: '11/28/2018',
          out1: 'out1',
          out2: 'out2',
          out3: 'out3',
        }
      },
    });
  });

});
