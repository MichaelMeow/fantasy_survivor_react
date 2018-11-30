import adminReducer from './../../src/reducers/adminReducer';

describe("adminReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(adminReducer({}, { type: null })).toEqual({
    });
  });

});
