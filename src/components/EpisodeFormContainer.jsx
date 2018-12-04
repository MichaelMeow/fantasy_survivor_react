import React from 'react';
import { connect } from 'react-redux';
import EpisodeForm from './EpisodeForm';

class EpisodeFormContainer extends React.Component {

  constructor(props) {
    super(props);
    const initialState = {
      episodeNumber: '',
      episodeTitle: '',
      rewardWinner: '',
      immunityWinner: '',
      out1: '',
      out2: '',
      out3: '',
      episodeMessage: '',
      airDate: '',
      scoringTable: [],
    }
    this.state = initialState;
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(changedState){
    this.setState(changedState);
  }

  render() {
    return (
      <EpisodeForm
        episodeFormState={this.state}
        onStateChange={this.handleStateChange}
        episodes = {this.props.episodes}
        onLoadEpisodeState = {this.props.handleLoadEpisodeState}
        isEpisodeSubmitted = {this.props.isEpisodeSubmitted}
        contestants = {this.props.contestants}
        onError = {this.props.onError}
      />
      )
    }

  }

export default connect()(EpisodeFormContainer);
