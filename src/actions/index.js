import * as types from './../constants/ActionTypes';

export const addContestant = (name, ogTribe, photoURL, id) => ({
  type: types.ADD_CONTESTANT,
  name,
  ogTribe,
  photoURL,
  id,
});
export const addTribe = (name, tribeColor, id) => ({
  type: types.ADD_TRIBE,
  name,
  tribeColor,
  id,
});
export const addEpisode = (episodeTitle, episodeNumber, rewardWinner, immunityWinner, episodeMessage, airDate, out1, out2, out3, id) => ({
  type: types.ADD_EPISODE,
  episodeTitle,
  episodeNumber,
  rewardWinner,
  immunityWinner,
  episodeMessage,
  airDate,
  out1,
  out2,
  out3,
  id,
});

export const clearMessages = () => ({
  type: types.CLEAR_MESSAGES,
});
