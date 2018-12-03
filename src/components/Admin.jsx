import React from 'react';
import { connect } from 'react-redux';
import ContestantForm from './ContestantForm';
import EpisodeFormContainer from './EpisodeFormContainer';
import TribeForm from './TribeForm';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadEpisodeFormState: null,
    };
    this.handleContestantFormSubmission = this.handleContestantFormSubmission.bind(this);
    this.handleEpisodeFormSubmission = this.handleEpisodeFormSubmission.bind(this);
    this.handleTribeFormSubmission = this.handleTribeFormSubmission.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleLoadEpisodeState = this.handleLoadEpisodeState.bind(this);
  }

  componentDidMount(){

    let newState = Object.assign({}, this.state);
    newState.isContestantSubmitted = false;
    newState.isEpisodeSubmitted = false;
    newState.isTribeSubmitted = false;
    newState.error = false;
    newState.loadEpisodeFormState = null;
    this.setState(newState);
  }

  handleContestantFormSubmission(){
    let newState = Object.assign({}, this.state);
    newState.isContestantSubmitted = true;
    newState.error = false;
    this.setState(newState);
  }
  handleEpisodeFormSubmission(){
    let newState = Object.assign({}, this.state);
    newState.isEpisodeSubmitted = true;
    newState.loadEpisodeFormState = null;
    newState.error = false;
    this.setState(newState);
  }
  handleTribeFormSubmission(){
    let newState = Object.assign({}, this.state);
    newState.isTribeSubmitted = true;
    newState.error = false;
    this.setState(newState);
  }

  handleError(message){
    let newState = Object.assign({}, this.state);
    newState.error = message;
    this.setState(newState);
    window.scrollTo(0, 0);
  }

  handleLoadEpisodeState(episodeFormState){
    this.setState(episodeFormState);
  }

  render(){
    return (

      <div>
        {this.state.error ? <div className='errorMessage'> {this.state.error} </div> : <div></div>}
        <EpisodeFormContainer
        episodes = {this.props.episodes}
        onEpisodeFormSubmission = {this.handleEpisodeFormSubmission}
        onLoadEpisodeState = {this.handleLoadEpisodeState}
        isEpisodeSubmitted = {this.state.isEpisodeSubmitted}
        contestants = {this.props.contestants}
        onError = {this.handleError}
        />
        <TribeForm
        tribes = {this.props.tribes}
        isTribeSubmitted = {this.state.isTribeSubmitted}
        onTribeFormSubmission = {this.handleTribeFormSubmission}
        onError = {this.handleError}
        />
        <ContestantForm
        onContestantFormSubmission = {this.handleContestantFormSubmission}
        isContestantSubmitted = {this.state.isContestantSubmitted}
        contestants = {this.props.contestants}
        onError = {this.handleError}
         />
        <style jsx>{`
          .errorMessage {
            padding: 10px;
            background-color: lightcoral;
            border-radius: 5px;
          }
          `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    contestants: state.adminSlice.contestants,
    episodes: state.adminSlice.episodes,
    tribes: state.adminSlice.tribes,
  }
}

export default connect(mapStateToProps)(Admin);
