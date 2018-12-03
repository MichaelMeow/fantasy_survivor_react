import moveReducer from './../../src/reducers/moveReducer';
import c from './../../src/constants';

const { defaultMoveState } = c;

describe("moveReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(moveReducer(defaultMoveState, { type: null })).toEqual({
      rank: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null
      }
    });
  });

});
