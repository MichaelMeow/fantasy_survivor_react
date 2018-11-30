import moveReducer from './../../src/reducers/moveReducer';

describe("moveReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(moveReducer({}, { type: null })).toEqual({
    });
  });

});
