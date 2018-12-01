import React from 'react';
import { connect } from 'react-redux';
import ContestantForm from './ContestantForm';
import EpisodeForm from './EpisodeForm';
import TribeForm from './TribeForm';


class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isContestantSubmitted: false,
      isEpisodeSubmitted: false,
      isTribeSubmitted: false,
    };
    this.handleEpisodeFormSubmission = this.handleEpisodeFormSubmission.bind(this);
  }

  componentDidMount(){
    let newState = Object.assign({}, this.state);
    newState.isContestantSubmitted = false;
    newState.isEpisodeSubmitted = false;
    newState.isTribeSubmitted = false;
    this.setState(newState);
  }

  handleEpisodeFormSubmission(){
    let newState = Object.assign({}, this.state);
    newState.isEpisodeSubmitted = true;
    this.setState(newState);
  }

  render(){
    return (

      <div>
        <ContestantForm onContestantFormSubmission = {this.handleContestantFormSubmission} contestants = {this.props.contestants}
         />
        <EpisodeForm
        episodes = {this.props.episodes}
        onEpisodeFormSubmission = {this.handleEpisodeFormSubmission}
        isEpisodeSubmitted = {this.state.isEpisodeSubmitted}
        contestants = {this.props.contestants}
        state = {this.state}
        />
        <TribeForm
        tribes = {this.props.tribes}
        onTribeFormSubmission = {this.handleEpisodeFormSubmission} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isContestantSubmitted: false,
    isEpisodeSubmitted: false,
    isTribeSubmitted: false,
    contestants: state.adminSlice.contestants,
    episodes: state.adminSlice.episodes,
    tribes: state.adminSlice.tribes,
  }
}

export default connect(mapStateToProps)(Admin);
